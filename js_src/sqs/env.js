import * as core from "../core";


const env = {
    /**
     *
     * The `ENV` is already set based on `localhost` or `IP` based domain.
     * Update the `ENV` for squarespace.com domains as we consider this `DEV` also.
     *
     */
    ENV: (/squarespace\.com$/.test( document.domain ) ? core.env.DEV : core.env.ENV),


    /**
     *
     * @method isConfig
     * @memberof core.env
     * @description Determine whether we are in Squarespace /config land or not.
     * @returns {boolean}
     *
     */
    isConfig () {
        return (window.parent.location.pathname.indexOf( "/config" ) !== -1);
    }
};


/******************************************************************************
 * Expose
*******************************************************************************/
core.env.ENV = env.ENV;
core.env.isConfig = env.isConfig;


/******************************************************************************
 * Export
*******************************************************************************/
export default env;