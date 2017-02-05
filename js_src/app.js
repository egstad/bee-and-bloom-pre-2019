import router from "./router";
import * as core from "./core";
import mobileNav from "./nav-mobile";
import nav from "./menus/nav";
// import filterSort from "./filterizr";
// import intro from "./menus/intro";
// import filterlist from "./filterlist";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
    constructor () {
        this.nav = nav;
        // this.intro = intro;
        this.mobileNav = mobileNav;
        this.core = core;
        this.router = router;
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
        this.core.detect.init( this );
        this.core.resizes.init( this );
        this.core.scrolls.init( this );
        this.router.init( this );
        this.mobileNav.init( this );
        this.nav.init( this );
        // this.intro.init( this );
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

        // this.intro.teardown();
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
