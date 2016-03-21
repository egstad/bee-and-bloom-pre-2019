import $ from "js_libs/hobo/dist/hobo.build";
import * as util from "./util";


const _rSlash = /^\/|\/$/g;


/**
 *
 * @public
 * @namespace api
 * @memberof core
 * @description Provide some api methods for accessing content via JS.
 *
 */
const api = {
    /**
     *
     * @public
     * @member data
     * @memberof core.api
     * @description URLs this little api needs to use.
     *
     */
    data: {
        site: {
            url: location.origin,
            api: [location.origin, "api"].join( "/" )
        }
    },


    /**
     *
     * @public
     * @member dataType
     * @memberof core.api
     * @description Default dataType for the `request` api method.
     *
     */
    dataType: "json",


    /**
     *
     * @public
     * @member method
     * @memberof core.api
     * @description Default method for the `request` api method.
     *
     */
    method: "GET",


    /**
     *
     * @public
     * @method urify
     * @param {string} uri The collection uri
     * @memberof core.api
     * @description Ensures a leading/trailing slash.
     * @returns {string}
     *
     */
    urify ( uri ) {
        return ["/", uri.replace( _rSlash, "" ), "/"].join( "" );
    },


    /**
     *
     * @public
     * @method endpoint
     * @param {string} uri The collection uri
     * @memberof core.api
     * @description Creates the fullUrl from a collection uri.
     * @returns {string}
     *
     */
    endpoint ( uri ) {
        return [this.data.site.url, uri.replace( _rSlash, "" )].join( "/" );
    },


    /**
     *
     * @public
     * @method apipoint
     * @param {string} uri The API uri
     * @memberof core.api
     * @description Creates the fullUrl from an API uri.
     * @returns {string}
     *
     */
    apipoint ( uri ) {
        return [this.data.site.api, uri.replace( _rSlash, "" )].join( "/" );
    },


    /**
     *
     * @public
     * @method request
     * @param {string} url The API URL
     * @param {object} params Merge params to send
     * @param {object} options Merge config to pass to $.ajax()
     * @memberof core.api
     * @description Creates the fullUrl from an API uri.
     * @returns {Promise}
     *
     */
    request ( url, params, options ) {
        const data = util.extendObject(
            {
                format: this.format,
                nocache: true
            },
            params
        );
        const opts = util.extendObject(
            {
                url,
                data,
                dataType: this.dataType,
                method: this.method
            },
            options
        );

        return $.ajax( opts );
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default api;