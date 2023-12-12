(function ($){
    "use strict";
    $(document).ready(function(){

        if($('.home-image-slider')){
            $('.home-image-slider').owlCarousel({
                loop:true,
                margin:10,
                nav: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        };

        if($('.charity-slider')){
            $('.charity-slider').owlCarousel({
                loop:true,
                margin:10,
                nav: false,
                responsive:{
                    0:{
                        items:1
                    }
                }
            })
        };

        



    });
}(jQuery));

function navmenu_toggle(){
    document.querySelector("body").classList.toggle("show-menu");
}