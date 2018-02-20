// import * as core from "./core";
import $ from "js_libs/jquery/dist/jquery.js";

const textBar = {

    init () {
        console.log( "comp-textbar.js" );
      if ( $('.js-toolbar').length > 0 ) {
        this.createSpans();
      }
    },

    createSpans () {
        $('.js-toolbar')
            .find('*')
            .addBack('div')
            .each(function () {

                const textNode = $(this).contents().filter(function () {
                   return this.nodeType === 3; //Node.TEXT_NODE
                });

                const text = textNode.text().split(' ');
                const replace = '';

                $.each(text, function (index, value) {
                    if ( value.replace(/\s+/, "") ) {   // Remove whitespaces
                       replace += '<span class="wraped">' + value + '</span>';
                    }
                });

                textNode.replaceWith( $(replace) );

            });
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
export default textBar;
