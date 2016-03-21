import paramalama from "paramalama";
import * as core from "../core";


const api = {
    /**
     *
     * @public
     * @method index
     * @param {string} uri The index uri
     * @param {object} params Merge params to send
     * @param {object} options Merge options to send
     * @memberof core.api
     * @description Retrieves collections from a given index.
     *              Returned Promise resolves with an items {object} indexed by `urlId`
     * @returns {Promise}
     *
     */
    index ( uri, params, options ) {
        return new Promise(( resolve, reject ) => {
            let i = 0;
            const colls = [];
            const cached = core.cache.get( uri );
            const handle = function ( data ) {
                for ( i = data.collections.length; i--; ) {
                    colls.push( data.collections[ i ].urlId );
                }

                this.collections( colls, params, options ).then( ( items ) => resolve( items ) );
            };

            if ( cached ) {
                setTimeout( () => handle( cached ), 1 );

            } else {
                this.request( this.endpoint( uri ) )
                    .then( ( data ) => {
                        //core.cache.set( data.collection.urlId, data.collection );

                        handle( data.collection );

                    })
                    .catch( ( error ) => reject( error ) );
            }
        });
    },


    /**
     *
     * @public
     * @method collection
     * @param {string} uri The collection uri
     * @param {object} params Merge params to send
     * @param {object} options Merge options to send
     * @memberof core.api
     * @description Retrieves items from a given collection.
     *              Returned Promise resolves with a data {object}
     * @returns {Promise}
     *
     */
    collection ( uri, params, options ) {
        return new Promise(( resolve, reject ) => {
            let collection = {};
            const cached = core.cache.get( uri );
            const seg = uri.split( "?" )[ 0 ];

            params = core.util.extendObject( (params || {}), paramalama( uri ) );

            if ( params.tag ) {
                params.tag = params.tag.replace( /\+/g, " " );
            }

            if ( params.category ) {
                params.category = params.category.replace( /\+/g, " " );
            }

            if ( cached ) {
                setTimeout( () => resolve( cached ), 1 );

            } else {
                this.request( this.endpoint( seg ), params, options )
                    .then( ( data ) => {
                        // Resolve with `responseText`
                        if ( typeof data === "string" ) {
                            //core.cache.set( uri, data );

                            resolve( data );

                        } else {
                            // Collection?
                            collection = {
                                collection: data.collection,
                                item: (data.item || null),
                                items: (data.items || null),
                                pagination: (data.pagination || null)
                            };

                            //core.cache.set( uri, collection );

                            resolve( collection );
                        }

                    })
                    .catch( ( error ) => {
                        reject( error );
                    });
            }
        });
    },


    /**
     *
     * @public
     * @method collections
     * @param {array} uris The collection uris to query for
     * @param {object} params Merge params to send
     * @param {object} options Merge options to send
     * @memberof core.api
     * @description Retrieves items from a given set of collection.
     *              Returned Promise resolves with an item {object}
     * @returns {Promise}
     *
     */
    collections ( uris, params, options ) {
        return new Promise(( resolve/* , reject */ ) => {
            let curr = 0;
            let i = uris.length;
            const items = {};
            const func = function ( uri, data ) {
                curr++;

                if ( data ) {
                    items[ uri ] = data;
                }

                if ( curr === uris.length ) {
                    resolve( items );
                }
            };

            for ( i; i--; ) {
                this.collection( uris[ i ], params, options ).then( func.bind( null, uris[ i ] ) );
            }
        });
    }
};


/******************************************************************************
 * Expose
*******************************************************************************/
core.api.index = api.index;
core.api.collection = api.collection;
core.api.collections = api.collections;


/******************************************************************************
 * Export
*******************************************************************************/
export default api;