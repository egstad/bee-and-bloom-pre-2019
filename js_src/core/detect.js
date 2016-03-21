import dom from "./dom";
import log from "./log";


const vendors = [
    "Webkit",
    "Moz",
    "ms"
];


/**
 *
 * @public
 * @namespace detect
 * @memberof core
 * @description Handles basic detection of touch devices.
 *
 */
const detect = {
    /**
     *
     * @public
     * @method init
     * @memberof core.detect
     * @description Initializes the detect module.
     *
     */
    init () {
        this._isTouch = ("ontouchstart" in window || "DocumentTouch" in window);
        this._isMobile = (/Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test( window.navigator.userAgent ));
        this._isSurface = ("onmouseover" in document) && (/Windows NT/.test( window.navigator.userAgent ) && /Touch/.test( window.navigator.userAgent ));
        this._isStandalone = ("standalone" in window);
        this._prefix = this.getPrefix();

        // iOS Standalone mode
        if ( "standalone" in window ) {
            dom.html.addClass( "is-standalone" );
        }

        // Windows Surface mode
        if ( this._isSurface ) {
            dom.html.addClass( "is-surface" );
        }

        // Touch support mode
        if ( this._isTouch ) {
            dom.html.addClass( "is-touchable" );

        // Mouse support mode
        } else {
            dom.html.addClass( "is-hoverable" );
        }

        log( "detect initialized" );
    },


    /**
     *
     * @public
     * @method getPrefix
     * @memberof core.detect
     * @description Get the vendor prefix.
     * @returns {string}
     *
     */
    getPrefix () {
        let i = vendors.length;

        if ( document.body.style.transform === null ) {
            for ( i; i--; ) {
                if ( document.body.style[ `${vendors[ i ]}Transform` ] ) {
                    return vendors[ i ];
                }
            }
        }

        return "";
    },


    /**
     *
     * @public
     * @method getPrefixed
     * @param {string} property The property to be prefixed
     * @memberof core.detect
     * @description Get the vendor prefixed property.
     * @returns {string}
     *
     */
    getPrefixed ( property ) {
        const camelProp = (property[ 0 ].toUpperCase() + property.slice( 1 ));

        return (this._prefix ? (this._prefix + camelProp) : property);
    },


    /**
     *
     * @public
     * @method isMobile
     * @memberof core.detect
     * @description Check for high-end mobile device user agents.
     * @returns {boolean}
     *
     */
    isMobile () {
        return this._isMobile;
    },


    /**
     *
     * @public
     * @method isTouch
     * @memberof core.detect
     * @description Check whether this is a touch device or not.
     * [See Modernizr]{@link https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js}
     * @returns {boolean}
     *
     */
    isTouch () {
        return this._isTouch;
    },


    /**
     *
     * @public
     * @method isDevice
     * @memberof core.detect
     * @description Must be `isMobile` and `isTouch`.
     * @returns {boolean}
     *
     */
    isDevice () {
        return (this._isTouch && this._isMobile);
    },


    /**
     *
     * @public
     * @method isStandalone
     * @memberof core.detect
     * @description Must be window.standalone.
     * @returns {boolean}
     *
     */
    isStandalone () {
        return this._isStandalone;
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default detect;