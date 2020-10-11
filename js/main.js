const cartButton = document.querySelector('#cart-button');
const cartModal = document.querySelector('.modal_cart');

const cartClose = document.querySelector('#cart-close');

cartButton.addEventListener('click', function(event){
    cartModal.classList.toggle("is-open");
    document.body.classList.toggle("locked");
});

cartClose.addEventListener('click', function(event){
    cartModal.classList.toggle("is-open");
    document.body.classList.toggle("locked");

});

new WOW().init();