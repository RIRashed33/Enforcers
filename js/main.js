(function ($){
    "use strict";
    $(document).ready(function(){

        if($('.home-image-slider')){
            $('.home-image-slider').owlCarousel({
                loop:true,
                autoWidth: true,
                nav: false,
                dots: false,
                responsive:{
                    0:{
                        items: 1,
                        center: true,
                        autoplay:true,
                        margin: 16
                    },
                    480:{
                        items: 2,
                        center: false,
                        autoplay:false,
                        margin: 24,
                    },
                    992:{
                        items: 4,
                        center: false,
                        autoplay:false,
                        margin: 32,
                    }
                }
            })
        };

        if($('.charity-slider-1')){
            $('.charity-slider-1').owlCarousel({
                loop:true,
                nav: false,
                dots: false,
                responsive : {
                    0 : {
                        items:1,
                        autoplay: true,
                        margin: 16
                    },
                    992 : {
                        items: 1,
                        stagePadding: 100,
                        autoplay:false,
                        margin: 36,
                    },
                    1200 : {
                        items: 1,
                        stagePadding: 200,
                        autoplay:false,
                        margin: 36,
                    }
                }
            })
        };

        if($('.charity-slider-2')){
            $('.charity-slider-2').owlCarousel({
                loop:true,
                nav: false,
                dots: false,
                responsive : {
                    0 : {
                        items:1,
                        autoplay: true,
                        margin: 16
                    },
                    992 : {
                        items: 1,
                        stagePadding: 100,
                        autoplay:false,
                        margin: 36,
                    },
                    1200 : {
                        items: 1,
                        stagePadding: 200,
                        autoplay:false,
                        margin: 36,
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