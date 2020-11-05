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

    const required = e.target.querySelectorAll('.req');

    let errors = 0;

    required.forEach(function(item,index){
        if(!item.value.trim()) {
            errors++;
            item.style.borderBottom = "1px solid red";
        }
        else {
            item.style.borderBottom = "";
            
        }
    });

    if (errors === 0) {
        showModal(modalSuccess);
        body.classList.add("locked");

        e.currentTarget.reset();
    }

});
