$(document).ready(function(){
    $('.slider-main').slick({
        waitForAnimate: false,
        dots: true,
        speed: 300,
        arrows: false,
        adaptiveHeight: true,
        asNavFor: '.slider-sync',
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('.slider-sync').slick({
        arrows: false,
        speed: 300,
        fade: true,
        swipe: false,
        adaptiveHeight: true
    });

    $('.slider-nav').slick({
        arrows: true,
        speed: 150,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 1000,
        waitForAnimate: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 425,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });

});