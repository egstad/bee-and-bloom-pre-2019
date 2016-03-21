import * as core from "../core";
import $ from "js_libs/hobo/dist/hobo.build";


// Singleton
let _instance = null;


/**
 *
 * @public
 * @class Metrics
 * @classdesc Handles Squarespace Metrics.
 * @memberof sqs
 *
 */
class Metrics {
    constructor () {
        if ( !_instance ) {
            this.initSQSMetrics();

            core.emitter.on( "app--analytics-push", this.pushTrack.bind( this ) );

            core.log( "Metrics initialized", this );

            _instance = this;
        }

        return _instance;
    }


    /**
     *
     * @public
     * @method initSQSMetrics
     * @memberof sqs.Metrics
     * @description Cache the initial static context object.
     *
     */
    initSQSMetrics () {
        if ( _instance ) {
            return;
        }

        this.cacheStaticContext( window.Static.SQUARESPACE_CONTEXT );
    }


    /**
     *
     * @public
     * @method track
     * @param {string} type The object type, item or collection
     * @param {object} data The data context to track with
     * @memberof sqs.Metrics
     * @description Track Squarespace Metrics since we are ajax-routing.
     *
     */
    track ( type, data ) {
        core.log( "Metrics track", type, data );

        // Squarespace Metrics
        window.Y.Squarespace.Analytics.view( type, data );
    }


    /**
     *
     * @public
     * @method pushTrack
     * @param {string} html The full responseText from an XHR request
     * @param {jQuery} $doc Optional document node to receive and work with
     * @memberof sqs.Metrics
     * @description Parse static context from responseText and track it.
     *
     */
    pushTrack ( html, $doc ) {
        let ctx = null;

        $doc = ($doc || $( html ));

        ctx = this.getStaticContext( html );

        if ( ctx ) {
            this.track( (ctx.item ? "item" : "collection"), (ctx.item || ctx.collection) );
        }
    }


    /**
     *
     * @public
     * @method getStaticContext
     * @param {string} resHTML The responseText HTML string from router
     * @memberof sqs.Metrics
     * @description Attempt to parse the Squarespace data context from responseText.
     * @returns {object}
     *
     */
    getStaticContext ( resHTML ) {
        // Match the { data } in Static.SQUARESPACE_CONTEXT
        let ctx = core.cache.get( `${core.util.getPageKey()}-context` );

        if ( !ctx ) {
            ctx = resHTML.match( /Static\.SQUARESPACE_CONTEXT\s=\s(.*?)\};/ );

            if ( ctx && ctx[ 1 ] ) {
                ctx = ctx[ 1 ];

                // Put the ending {object} bracket back in there :-(
                ctx = `${ctx}}`;

                // Parse the string as a valid piece of JSON content
                try {
                    ctx = JSON.parse( ctx );

                } catch ( error ) {
                    core.log( "warn", "Analytics JSON.parse Error", error );
                }

                // Cache context locally
                this.cacheStaticContext( ctx );

            } else {
                ctx = false;
            }
        }

        return ctx;
    }


    /**
     *
     * @public
     * @method cacheStaticContext
     * @param {object} json The Static.SQUARESPACE_CONTEXT ref
     * @memberof sqs.Metrics
     * @description Cache the sqs context once its been parsed out.
     *
     */
    cacheStaticContext ( json ) {
        core.cache.set( `${core.util.getPageKey()}-context`, json );
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default Metrics;