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
        speed: 120,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 1000,
        waitForAnimate: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    centerMode: false,
                    variableWidth: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 425,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-new').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        speed: 150,
        adaptiveHeight: true,
        touchThreshold: 1000
    });

});