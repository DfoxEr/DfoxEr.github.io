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
$('.form-zamer').on("submit",function(e){
    e.preventDefault();

    const required = e.target.querySelectorAll('.req');

    let errors = 0;

    required.forEach(function(item,index){
        if(!item.value.trim()) {
            errors++;
            item.closest(".form__group").querySelector(".form__error").innerHTML = "* заполните поле";
        }
        else {
            item.closest(".form__group").querySelector(".form__error").innerHTML = "";
        }
    });

    if (errors === 0) {
        const modalSuccess = document.querySelector(".modal-success");
        const overlay = document.querySelector(".overlay");

        overlay.classList.remove("overlay_hidden");
        modalSuccess.classList.remove("modal_hidden");
        document.querySelector("body").classList.add("locked");

        e.currentTarget.reset();
    }

});