import $ from "js_libs/hobo/dist/hobo.build";
import log from "./log";
import env from "./env";
import loadJS from "fg-loadjs";
import emitter from "./emitter";


// Singleton
let _instance = null;


/**
 *
 * @public
 * @class Analytics
 * @classdesc Handles Google Analytics.
 *            @see {@link https://developers.google.com/analytics/devguides/collection/analyticsjs/}
 * @memberof core
 *
 */
class Analytics {
    constructor () {
        if ( !_instance ) {
            this.devUA = "";
            this.prodUA = "";
            this.GAScript = "//www.google-analytics.com/analytics.js";
            this.GAUATag = (env.isDev() ? this.devUA : this.prodUA);

            this.initGoogleAnalytics();

            emitter.on( "app--analytics-push", this.pushTrack.bind( this ) );

            log( "Analytics initialized", this );

            _instance = this;
        }

        return _instance;
    }


    /**
     *
     * @public
     * @method initGoogleAnalytics
     * @memberof core.Analytics
     * @description Build GA interface and load analytics.js.
     *
     */
    initGoogleAnalytics () {
        if ( _instance ) {
            return;
        }

        // Setup GA Interface
        window.GoogleAnalyticsObject = "ga";
        window.ga = (window.ga || function () {
            // Blockers like `Privacy Badger` will blow GA up here
            // https://www.eff.org/privacybadger
            try {
                window.ga.q = (window.ga.q || []).push( arguments );

            } catch ( error ) {
                log( "warn", "GA Error", error );
            }
        });
        window.ga.l = Number( new Date() );

        // Load GA Javascript
        loadJS( this.GAScript, () => {
            log( "Analytics GA loaded" );

            window.ga( "create", this.GAUATag, "auto" );
            window.ga( "send", "pageview" );
        });
    }


    /**
     *
     * @public
     * @method track
     * @memberof core.Analytics
     * @description Track Squarespace Metrics since we are ajax-routing.
     *
     */
    track () {
        log( "Analytics track pageview" );

        // Google Analytics
        window.ga( "send", "pageview", window.location.href );
    }


    /**
     *
     * @public
     * @method pushTrack
     * @param {string} html The full responseText from an XHR request
     * @param {Hobo} $doc Optional document node to receive and work with
     * @memberof core.Analytics
     * @description Parse static context from responseText and track it.
     *
     */
    pushTrack ( html, $doc ) {
        let $title = null;

        $doc = ($doc || $( html ));
        $title = $doc.find( "title" );

        if ( !$title.length ) {
            $title = $doc.filter( "title" );
        }

        this.track();

        this.setDocumentTitle( $title[ 0 ].innerText );
    }


    /**
     *
     * @public
     * @method setDocumentTitle
     * @param {string} title The new title for the document
     * @memberof core.Analytics
     * @description Update the documents title.
     *
     */
    setDocumentTitle ( title ) {
        document.title = title;
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default Analytics;