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
        arrows: false,
        speed: 150,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 20,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});