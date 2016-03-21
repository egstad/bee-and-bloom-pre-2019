import * as util from "./util";
import log from "./log";
import emitter from "./emitter";


/**
 *
 * @public
 * @class Waypoints
 * @memberof core
 * @param {Hobo} elements The element collection to iterate over
 * @param {function} callback The function to pass the elements to
 * @param {function} executor The function that determines a waypoint element is found
 * @classdesc Handles one time notification when Elements enter the viewport.
 *
 */
class Waypoints {
    constructor ( elements, callback, executor ) {
        this.elements = elements;
        this.callback = callback;
        this.executor = (executor || util.isElementLoadable);

        if ( !this.elements || !this.callback ) {
            log( "warn", "Waypoints needs `elements` and a `callback` method!" );
        }

        this._onScroller = this.onScroller.bind( this );

        this._onScroller();

        emitter.on( "app--scroll", this._onScroller );
    }


    /**
     *
     * @public
     * @instance
     * @method onScroller
     * @memberof core.Waypoints
     * @description Listen for the scroll event.
     *
     */
    onScroller () {
        const $queued = this.elements.not( ".is-waypoint" );
        let i = $queued.length;
        let $elem = null;

        if ( !$queued.length ) {
            this.destroy();
        }

        for ( i; i--; ) {
            $elem = $queued.eq( i );

            if ( this.executor( $elem[ 0 ] ) ) {
                $elem.addClass( "is-waypoint" );

                this.callback( $elem );
            }
        }
    }


    /**
     *
     * @public
     * @instance
     * @method destroy
     * @memberof core.Waypoints
     * @description Undo event bindings for this instance.
     *
     */
    destroy () {
        emitter.off( "app--scroll", this._onScroller );
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default Waypoints;