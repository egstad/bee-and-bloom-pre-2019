import $ from "js_libs/hobo/dist/hobo.build";


/**
 *
 * @public
 * @namespace dom
 * @memberof core
 * @description Holds high-level cached Nodes.
 *
 */
const dom = {
    /**
     *
     * @public
     * @member doc
     * @memberof core.dom
     * @description The cached document.
     *
     */
    doc: $( document ),


    /**
     *
     * @public
     * @member html
     * @memberof core.dom
     * @description The cached documentElement node.
     *
     */
    html: $( document.documentElement ),


    /**
     *
     * @public
     * @member body
     * @memberof core.dom
     * @description The cached body node.
     *
     */
    body: $( document.body ),


    /**
     *
     * @public
     * @member page
     * @memberof core.dom
     * @description The cached page container node.
     *
     */
    page: $( ".js-page" ),


    /**
     *
     * @public
     * @member nav
     * @memberof core.dom
     * @description The cached nav node.
     *
     */
    nav: $( ".js-nav" ),


    /**
     *
     * @public
     * @member header
     * @memberof core.dom
     * @description The cached header node.
     *
     */
    header: $( ".js-header" ),


    /**
     *
     * @public
     * @member intro
     * @memberof core.dom
     * @description The cached intro node.
     *
     */
    intro: $( ".js-intro" )
};



/******************************************************************************
 * Export
*******************************************************************************/
export default dom;