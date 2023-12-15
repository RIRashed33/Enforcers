(function ($){
    "use strict";
    $(document).ready(function(){

        if($('.home-image-slider')){
            $('.home-image-slider').owlCarousel({
                loop:true,
                autoWidth: true,
                nav: false,
                margin:24,
                responsive:{
                    0:{
                        items:1,
                        center: true,
                    },
                    500:{
                        items:2,
                        center: false
                    },
                    768:{
                        items: 3,
                    },
                    1000:{
                        items:4
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

        if($('.about-carousel')){
            $('.about-carousel').owlCarousel({
                loop:true,
                margin:32,
                nav: false,
                responsive:{
                    0:{
                        items:1,
                        autoWidth: true
                    },
                    600:{
                        autoWidth: true,
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })
        };

        



    });
}(jQuery));

function navmenu_toggle(){
    document.querySelector("body").classList.toggle("show-menu");
}