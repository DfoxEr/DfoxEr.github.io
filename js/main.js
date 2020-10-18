const burger = document.querySelector('.burger');

const headerMenu = document.querySelector('.header__nav');

burger.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-opened");
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("locked");

    document.querySelector(".overlay").classList.toggle("show");
});