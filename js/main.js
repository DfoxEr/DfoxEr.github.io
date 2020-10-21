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
});