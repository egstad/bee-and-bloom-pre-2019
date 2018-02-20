import router from "./router";
import * as core from "./core";
import nav from "./menus/nav";
// import textBar from "./comp-textbar";
// import filterSort from "./filtersort";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
    constructor () {
        // this.nav = nav;
        this.core = core;
        // this.textBar = textBar;
        // this.router = router;
        // this.filterSort = filterSort;

        this.initEvents();
        this.initModules();
    }


    /**
     *
     * @public
     * @instance
     * @method initModules
     * @memberof App
     * @description Initialize application modules.
     *
     */
    initModules () {
        // add device classes to htmle (touch, hover, surface classes)
        this.core.detect.init( this );
        this.core.scrolls.init( this );
        // this.textBar.init( this );
        // this.core.resizes.init( this );
        // this.router.init( this );
        // this.nav.init( this );
        // this.filterSort.init( this );

        this.analytics = new this.core.Analytics();
    }


    /**
     *
     * @public
     * @instance
     * @method initEvents
     * @memberof App
     * @description Initialize application events.
     *
     */
    initEvents () {
        this._onPreloadDone = this.onPreloadDone.bind( this );

        this.core.emitter.on( "app--preload-done", this._onPreloadDone );
    }


    /**
     *
     * @public
     * @instance
     * @method onPreloadDone
     * @memberof App
     * @description Handle the event for initializing the app.
     *
     */
    onPreloadDone () {
        this.core.emitter.off( "app--preload-done", this._onPreloadDone );

        this.core.dom.html.removeClass( "is-clipped" );
        this.core.dom.body.removeClass( "is-clipped" );
    }
}


/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;
