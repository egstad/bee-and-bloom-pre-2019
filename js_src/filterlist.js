import $ from "js_libs/jquery/dist/jquery.js";

const filterlist = {
    init () {
        this.toggleItems();
        //this.populateLinks();
    },
    hideAll () {
        $( ".filterlist-item").addClass( "-is-hidden" );
    },
    showAll () {
        $( ".filterlist-item").removeClass( "-is-hidden" );
    },
    populateLinks () {
        const linkEl = $(".filterlist-link");

        linkEl.each(function() {
            const linkText = this.dataset.link.replace('http://', '');
            this.textContent = linkText;
        });
    },
    toggleItems () {
        $( "#trigger--bee").on( "click", (e) => {
            this.hideAll();
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
