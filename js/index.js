// Клик по кнопке "Записаться на замер"
const zamerBtn = document.querySelector(".hero__button");

const zamer = document.querySelector(".offer");

zamerBtn.addEventListener("click", onHeroBtnClick);

function onHeroBtnClick() {
    zamer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}



// Обработка формы на замер

const modalSuccess = document.getElementById("modal-success");



$('.form-zamer').on("submit",function(e){
    e.preventDefault();

    if (checkRequired(e.target) === true) {
        showModal(modalSuccess);
        body.classList.add("locked");

        e.currentTarget.reset();
    }

});
