import * as core from "./core";
import $ from "js_libs/jquery/dist/jquery.js";



const mobileNav = {
    classWhenOpen : "mobile-nav--open",
    open : function () {
        core.dom.body.addClass( "is-menu-open is-neverflow" );
        $(".mobile-nav").attr("aria-hidden", "false");
        // core.dom.body.ontouchstart = function(e){ e.preventDefault(); }

        console.log('nav is open');
    },


    close : function () {
        core.dom.body.removeClass( "is-menu-open is-neverflow" );
        $(".mobile-nav").attr("aria-hidden", "true");
        // core.dom.body.ontouchstart = function(e){ return true; }

        console.log('nav is closed');
    },


    toggle : function () {
        $(".mobile-nav-trigger").on( "click", function() {
            if ( core.dom.body.hasClass( "is-menu-open" ) ) {
                mobileNav.close();
            } else {
                mobileNav.open();
            }
        });
    },


    init : function () {
        console.log("nav is working");
        this.toggle();
    },
}

// mobileNav.init();

/******************************************************************************
 * Export
*******************************************************************************/
export default mobileNav;
