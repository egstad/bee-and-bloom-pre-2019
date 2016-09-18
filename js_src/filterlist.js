import $ from "js_libs/jquery/dist/jquery.js";

const filterlist = {
    init () {
        this.toggleItems();
    },
    hideAll () {
        $( ".filterlist-item").addClass( "-is-hidden" );
    },
    showAll () {
        $( ".filterlist-item").removeClass( "-is-hidden" );
    },
    toggleItems () {
        $( "#trigger--bee").on( "click", () => {
            this.hideAll();
            $( ".category-bees").removeClass( "-is-hidden" );
        });
        $( "#trigger--bloom").on( "click", () => {
            this.hideAll();
            $( ".category-blooms").removeClass( "-is-hidden" );
        });
        $( "#trigger--nom").on( "click", () => {
            this.hideAll();
            $( ".category-noms").removeClass( "-is-hidden" );
        });
        $( "#trigger--life").on( "click", () => {
            this.hideAll();
            $( ".category-life").removeClass( "-is-hidden" );
        });
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
export default filterlist;
