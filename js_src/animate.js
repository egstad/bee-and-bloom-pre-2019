import * as core from "./core";


let $_jsElements = null;
let _isActive = false;


/**
 *
 * @public
 * @namespace animate
 * @description Handle a site-wide default animation style for elements in view.
 *
 */
const animate = {
    /**
     *
     * @public
     * @method init
     * @memberof animate
     * @description Method runs once when window loads.
     *
     */
    init () {
        core.log( "animate initialized" );

        core.emitter.on( "app--intro-art", this.onIntroArt.bind( this ) );
        core.emitter.on( "app--update-animate", this.onUpdateAnimate.bind( this ) );
        core.emitter.on( "app--pushed-route", this.onUpdateAnimate.bind( this ) );
    },


    /**
     *
     * @public
     * @method isActive
     * @memberof animate
     * @description Method informs PageController of active status.
     * @returns {boolean}
     *
     */
    isActive () {
        return (this.getElements() > 0);
    },


    /**
     *
     * @public
     * @method onload
     * @memberof animate
     * @description Method performs onloading actions for this module.
     *
     */
    onload () {
        _isActive = true;

        core.emitter.on( "app--scroll", updateAnimate );
        core.emitter.on( "app--resize", updateAnimate );

        updateAnimate();
    },


    /**
     *
     * @public
     * @method unload
     * @memberof animate
     * @description Method performs unloading actions for this module.
     *
     */
    unload () {
        this.teardown();
    },


    /**
     *
     * @public
     * @method teardown
     * @memberof animate
     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
     *
     */
    teardown () {
        $_jsElements = null;
        _isActive = false;
    },


    /**
     *
     * @public
     * @method getElements
     * @memberof animate
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElements = core.dom.page.find( ".js-animate" );

        return ( $_jsElements.length );
    },


    /**
     *
     * @public
     * @method onUpdateAnimate
     * @memberof animate
     * @description Handle updating node list and activating elements.
     *
     */
    onUpdateAnimate () {
        this.getElements();

        if ( !_isActive ) {
            this.onload();
        }

        updateAnimate();
    },


    /**
     *
     * @public
     * @method onIntroArt
     * @memberof animate
     * @description Animate elements on the intro-art event.
     *
     */
    onIntroArt () {
        const $elems = $_jsElements.filter( ".js-animate--intro-art" );

        if ( $elems.length ) {
            $elems.addClass( "is-active" );
        }
    }
};


/**
 *
 * @private
 * @method updateAnimate
 * @memberof animate
 * @description Update animation nodes.
 *
 */
const updateAnimate = function () {
    const $elems = $_jsElements.not( ".js-animate--intro-art" );
    let $elem = null;
    let i = $elems.length;

    for ( i; i--; ) {
        $elem = $elems.eq( i );

        if ( core.util.isElementVisibleVert( $elem[ 0 ] ) ) {
            $elem.addClass( "is-active" );

        } else {
            $elem.removeClass( "is-active" );
        }
    }
};


/******************************************************************************
 * Export
*******************************************************************************/
export default animate;