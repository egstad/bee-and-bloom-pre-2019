import Easing from "properjs-easing";


/**
 *
 * @public
 * @namespace config
 * @memberof core
 * @description Stores app-wide config values.
 *
 */
const config = {
    /**
     *
     * @public
     * @member defaultEasing
     * @memberof core.config
     * @description The default easing function for javascript Tweens.
     *
     */
    defaultEasing: Easing.easeInOutCubic,


    /**
     *
     * @public
     * @member defaultDuration
     * @memberof core.config
     * @description The default duration for javascript Tweens.
     *
     */
    defaultDuration: 400,


    /**
     *
     * @public
     * @member defaultVideoChannel
     * @memberof core.config
     * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for video.
     *
     */
    defaultVideoChannel: "vid",


    /**
     *
     * @public
     * @member defaultAudioChannel
     * @memberof core.config
     * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for audio.
     *
     */
    defaultAudioChannel: "bgm",


    /**
     *
     * @public
     * @member lazyImageSelector
     * @memberof core.config
     * @description The string selector used for images deemed lazy-loadable.
     *
     */
    lazyImageSelector: ".js-lazy-image",


    /**
     *
     * @public
     * @member lazyImageAttr
     * @memberof core.config
     * @description The string attribute for lazy image source URLs.
     *
     */
    lazyImageAttr: "data-img-src",


    /**
     *
     * @public
     * @member imageLoaderAttr
     * @memberof core.config
     * @description The string attribute ImageLoader gives loaded images.
     *
     */
    imageLoaderAttr: "data-imageloader",


    /**
     *
     * @public
     * @member asyncScriptPath
     * @memberof core.config
     * @description The string path where async scripts are kept.
     *
     */
    asyncScriptPath: "/assets/async/scripts/",


    /**
     *
     * @public
     * @member asyncStylePath
     * @memberof core.config
     * @description The string path where async styles are kept.
     *
     */
    asyncStylePath: "/assets/async/styles/"
};



/******************************************************************************
 * Export
*******************************************************************************/
export default config;