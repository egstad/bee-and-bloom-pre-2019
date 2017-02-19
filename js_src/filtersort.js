import router from "./router";
import * as core from "./core";
import $ from "js_libs/jquery/dist/jquery.js";
var Isotope = require('isotope-layout');

const filterSort = {

    init () {
      if ( $('.js-filter').length > 0 ) {
        this.initIsotope();
      }
    },

    initIsotope () {
      // init Isotope
      var iso = new Isotope( '.js-filter', {
        itemSelector: '.js-filter__item',
        layoutMode: 'vertical'
      });

      $( '.js-filter-trigger__bees' ).on('click', function () {
        iso.arrange({ filter: '.bees' });
      });

      $( '.js-filter-trigger__blooms' ).on('click', function () {
        iso.arrange({ filter: '.blooms' });
      });

      $( '.js-filter-trigger__life' ).on('click', function () {
        iso.arrange({ filter: '.life' });
      });

      $( '.js-filter-trigger__noms' ).on('click', function () {
        iso.arrange({ filter: '.noms' });
      });

    },
};

/******************************************************************************
 * Export
*******************************************************************************/
export default filterSort;
