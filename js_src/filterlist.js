import $ from "js_libs/hobo/dist/hobo.build";

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
            $( ".filterlist-item--bee").removeClass( "-is-hidden" );
        });
        $( "#trigger--bloom").on( "click", () => {
            this.hideAll();
            $( ".filterlist-item--bloom").removeClass( "-is-hidden" );
        });
        $( "#trigger--nom").on( "click", () => {
            this.hideAll();
            $( ".filterlist-item--nom").removeClass( "-is-hidden" );
        });
        $( "#trigger--life").on( "click", () => {
            this.hideAll();
            $( ".filterlist-item--life").removeClass( "-is-hidden" );
        });
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
export default filterlist;
