import * as core from "../core";
import Menu from "./Menu";


const $_jsItems = core.dom.nav.find( ".js-menu-nav-item" );


/**
 *
 * @public
 * @namespace nav
 * @description Handles opening / closing the main nav menu.
 * @memberof menus
 *
 */
const nav = {
    /**
     *
     * @public
     * @method init
     * @memberof menus.nav
     * @description Initializes navmenu interactions.
     *
     */
    init () {
        this.bindMainEvents();

        this.menu = new Menu( core.dom.nav );

        core.log( "nav initialized" );
    },


    /**
     *
     * @public
     * @method open
     * @memberof menus.nav
     * @description Opens the navmenu.
     *
     */
    open () {
        this.menu.open();
    },


    /**
     *
     * @public
     * @method close
     * @memberof menus.nav
     * @description Closes the navmenu.
     *
     */
    close () {
        this.menu.close();
    },


    /**
     *
     * @public
     * @method toggleActive
     * @param {string} id The unique nav identifier
     * @memberof menus.nav
     * @description Toggle the active nav menu item by id.
     *
     */
    toggleActive ( id ) {
        const $navi = $_jsItems.find( `.js-nav__${id}` );

        if ( $navi.length ) {
            $_jsItems.removeClass( "is-active" );
            $navi[ 0 ].className += " is-active";
        }
    },


    /**
     *
     * @public
     * @method bindMainEvents
     * @memberof menus.nav
     * @description Setup main interaction events for nav/header.
     *
     */
    bindMainEvents () {
        core.dom.nav.on( "click", ".js-menu-nav", onTapNavMenu );
        core.dom.header.on( "click", ".js-controller--nav", onTapNavIcon );
    }
};


/**
 *
 * @private
 * @method onTapNavMenu
 * @memberof menus.nav
 * @description Handles list icon event.
 *
 */
const onTapNavMenu = function () {
    nav.close();
};


/**
 *
 * @private
 * @method onTapNavIcon
 * @memberof menus.nav
 * @description Handles list icon event.
 *
 */
const onTapNavIcon = function () {
    nav.open();
};



/******************************************************************************
 * Export
*******************************************************************************/
export default nav;