import * as core from "../core";


/**
 *
 * @public
 * @class Menu
 * @classdesc Handle normalized open/close for overlay menus.
 * @param {Hobo} $node The menu element
 *
 */
class Menu {
    constructor ( $node ) {
        this.$node = $node;
        this.tDuration = core.util.getTransitionDuration( this.$node[ 0 ] );
        this.isOpen = false;

        this.$node.detach();
    }


    /**
     *
     * @public
     * @instance
     * @method open
     * @memberof menus.Menu
     * @description Open the menu.
     *
     */
    open () {
        this.isOpen = true;

        core.dom.html.addClass( "is-neverflow is-menu-open" );
        core.dom.body.append( this.$node );

        setTimeout( () => this.$node.addClass( "is-active" ), 100 );
        setTimeout( () => this.$node.addClass( "is-active-events" ), (this.tDuration * 2) );
    }


    /**
     *
     * @public
     * @instance
     * @method close
     * @memberof menus.Menu
     * @description Close the menu.
     *
     */
    close () {
        this.isOpen = false;

        this.$node.removeClass( "is-active" );
        core.dom.html.removeClass( "is-neverflow" );

        setTimeout( () => {
            core.dom.html.removeClass( "is-menu-open" );
            this.$node.detach().removeClass( "is-active-events" );

        }, (this.tDuration * 2) );
    }


    /**
     *
     * @public
     * @instance
     * @method toggle
     * @memberof menus.Menu
     * @description Open or Close the menu.
     *
     */
    toggle () {
        if ( this.isOpen ) {
            this.close();

        } else {
            this.open();
        }
    }


    /**
     *
     * @public
     * @instance
     * @method isActive
     * @memberof menus.Menu
     * @description Check the state of the menu.
     * @returns {boolean}
     *
     */
    isActive () {
        return this.isOpen;
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default Menu;