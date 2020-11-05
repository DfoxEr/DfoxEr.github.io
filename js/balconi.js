// клик по кнопке узнать стоимость

const offerButton = document.querySelector(".article__button");


offerButton.addEventListener("click", function(e) {
    e.preventDefault();

    showModal(modalCallback);
});