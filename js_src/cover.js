import * as core from "./core";


let $_jsElement = null;


/**
 *
 * @public
 * @namespace cover
 * @description A nice description of what this module does...
 *
 */
const cover = {
    /**
     *
     * @public
     * @method init
     * @memberof cover
     * @description Method runs once when window loads.
     *
     */
    init () {
        core.log( "cover initialized" );
    },


    /**
     *
     * @public
     * @method isActive
     * @memberof cover
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
     * @memberof cover
     * @description Method performs onloading actions for this module.
     *
     */
    onload () {
        const data = $_jsElement.data();

        // data
        //      type - page?, cover?
        //      tone - light?

        // 0.1 => Handle the `type` option
        if ( data.type === "page" ) {
            core.dom.html.addClass( "is-cover-page" );

        // Default `type` is "poster"
        } else {
            core.dom.html.addClass( "is-cover-poster" );
        }

        // 0.2 => Handle the `tone` option
        //        This changes to contrast of the list icon and page label
        //        Cover pages persist tone change, cover posters adjust between poster and page
        //        The default is to have a `dark` ui tone
        if ( data.tone === "light" ) {
            core.dom.html.addClass( "is-cover-light" );
        }

        // 0.3 => Handle the `bg` option
        if ( data.bg === "dark" ) {
            core.dom.html.addClass( "is-cover-page--dark" );
        }

        core.emitter.on( "app--scroll", onScroller );

        onScroller( window.scrollY );
    },


    /**
     *
     * @public
     * @method unload
     * @memberof cover
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
     * @memberof cover
     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
     *
     */
    teardown () {
        $_jsElement = null;

        core.emitter.off( "app--scroll", onScroller );

        core.dom.html.removeClass( "is-cover-page is-cover-page--dark is-cover-poster is-cover-light is-cover-moment" );
    },


    /**
     *
     * @public
     * @method getElements
     * @memberof cover
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElement = core.dom.page.find( ".js-cover" );

        return ( $_jsElement.length );
    },


    /**
     *
     * @public
     * @method setElement
     * @memberof cover
     * @param {Hobo} $element The new element this module will use
     * @description Method updates this modules node.
     *
     */
    setElement ( $element ) {
        $_jsElement = $element;
    }
};


/**
 *
 * @private
 * @method onScroller
 * @memberof cover
 * @description Handle scroll event to toggle `cover-moment` className.
 *
 */
const onScroller = function () {
    if ( core.util.isElementVisibleVert( $_jsElement[ 0 ] ) ) {
        core.dom.html.addClass( "is-cover-moment" );

    } else {
        core.dom.html.removeClass( "is-cover-moment" );
    }
};


/******************************************************************************
 * Export
*******************************************************************************/
export default cover;