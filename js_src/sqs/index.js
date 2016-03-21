import $ from "js_libs/hobo/dist/hobo.build";
import * as core from "../core";
import Metrics from "./Metrics";
import env from "./env";
import api from "./api";


/**
 *
 * @public
 * @namespace sqs
 * @description Handle Squarespace specific app tasks.
 *
 */
const sqs = {
    /**
     *
     * @public
     * @method init
     * @memberof sqs
     * @description Method runs once when window loads.
     *
     */
    init () {
        this.env = env;
        this.api = api;
        this.metrics = new Metrics();

        core.emitter.on( "app--resize-debounced", updateImages );
        core.emitter.on( "app--util--load-images", onLoadImages );

        core.log( "sqs initialized" );
    }
};


/**
 *
 * @private
 * @method updateImages
 * @description Update the loaded image on resize.
 *
 */
const updateImages = function () {
    const images = $( `[${core.config.imageLoaderAttr}]` );

    if ( images.length ) {
        images.forEach(( image ) => {
            image.removeAttribute( core.config.imageLoaderAttr );
        });

        core.util.loadImages( images, core.util.noop );
    }
};


/**
 *
 * @private
 * @method getClosestValue
 * @param {array} arr The array to index
 * @param {number} closestTo The value to compare
 * @description Get the closest value from an array of values.
 * @returns {number}
 *
 */
const getClosestValue = function ( arr, closestTo ) {
    // Get the highest number in arr in case it matches nothing.
    let close = Math.max.apply( null, arr );
    let i = arr.length;

    for ( i; i--; ) {
        // Check if it's higher than your number, but lower than your closest value
        if ( arr[ i ] >= closestTo && arr[ i ] < close ) {
            close = arr[ i ];
        }
    }

    return close;
};


/**
 *
 * @private
 * @method onLoadImages
 * @param {Hobo} images The image collection to work with
 * @description Set the best image variant for loading.
 *
 */
const onLoadImages = function ( images ) {
    const rQuery = /\?(.*)$/;
    const map = function ( vnt ) {
        return parseInt( vnt, 10 );
    };
    let $img = null;
    let data = null;
    let vars = null;
    let width = null;
    let height = null;
    let dimension = null;
    let variant = null;
    let source = null;
    let i = null;

    // Get the right size image from Squarespace
    // http://developers.squarespace.com/using-the-imageloader/
    // Depending on the original upload size, we have these variants
    // {original, 1500w, 1000w, 750w, 500w, 300w, 100w}
    i = images.length;

    for ( i; i--; ) {
        $img = images.eq( i );
        data = $img.data();
        width = ($img[ 0 ].clientWidth || $img[ 0 ].parentNode.clientWidth || window.innerWidth);
        height = ($img[ 0 ].clientHeight || $img[ 0 ].parentNode.clientHeight || window.innerHeight);
        dimension = Math.max( width, height );
        source = data.imgSrc.replace( rQuery, "" );

        if ( data.variants ) {
            vars = data.variants.split( "," ).map( map );
            variant = getClosestValue( vars, dimension );

            // If the pixel density is higher, use a larger image ?
            if ( window.devicePixelRatio > 1 ) {
                // Splice off the variant that was matched
                vars.splice( vars.indexOf( variant ), 1 );

                // Apply the new, larger variant as the format
                variant = getClosestValue( vars, variant );
            }

            $img[ 0 ].setAttribute( core.config.lazyImageAttr, `${source}?format=${variant}w` );
        }
    }
};


/******************************************************************************
 * Export
*******************************************************************************/
export default sqs;