
// masked

$(".input-phone").mask("+7 (999)-999-99-99");

// ----

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");
const header = document.querySelector(".header");
const overlayBody = document.getElementById("overlay-body");

const body = document.querySelector("body");

burger.addEventListener("click", onBurgerClick);

function onBurgerClick(e) {
    const targ = e.target;

    targ.closest(".burger").classList.toggle("burger_active");

    headerNav.classList.toggle("header-nav_hidden");

    body.classList.toggle("locked");

    if (window.pageYOffset > header.offsetTop && window.pageYOffset < (header.offsetTop+header.clientHeight)) {
        window.scrollTo(0,0);
    }

    overlayBody.classList.toggle("overlay_hidden");
}


// scroll

// const headerBody = document.querySelector(".header__body");
// const offset = header.offsetTop + header.clientHeight;

// window.addEventListener("scroll", onWindowScroll);

// function onWindowScroll(e) {
//     if (window.pageYOffset > offset) {
//         if (!headerBody.classList.contains("header__body_fixed")) {
//             headerBody.style.transform = 'translateY(-100%)';
//             setTimeout(
//                 function() {
//                     headerBody.style.transform = 'translateY(0)';
//                     headerBody.classList.add("header__body_fixed");
//                 }
//             ,100);
//         }
//     }
//     else {
//         headerBody.classList.remove("header__body_fixed");
//     }
// }


// overlay

overlayBody.addEventListener("click", function(e){
    if (burger.classList.contains("burger_active")) {
        burger.classList.remove("burger_active");
        headerNav.classList.add("header-nav_hidden");
        body.classList.remove("locked");
        overlayBody.classList.add("overlay_hidden");
    }
});



// модальные окна

const modals = document.querySelectorAll(".modal");
const modalOverlay = document.getElementById("overlay-modal");

modalOverlay.addEventListener("click", function(e) {
    modals.forEach((mod) => {
        if (!mod.classList.contains("modal__hidden"))
            mod.classList.add("modal_hidden");
    });

    modalOverlay.classList.add("overlay_hidden");
    body.classList.remove("locked");
});

modals.forEach((modal) => {
    modal.querySelector(".modal__close").addEventListener("click", function(e){
        modal.classList.add("modal_hidden");

        modalOverlay.classList.add("overlay_hidden");
        body.classList.remove("locked");
    });
});

function showModal(modal) {
    modal.classList.remove("modal_hidden");
    modalOverlay.classList.remove("overlay_hidden");
    body.classList.add("locked");
}

function hideModal(modal) {
    modal.classList.add("modal_hidden");
    modalOverlay.classList.add("overlay_hidden");
    body.classList.remove("locked");
}



// обратный звонок

const modalCallback = document.getElementById("modal-callback");
const callbackBtn = document.querySelector(".button-callback");



callbackBtn.addEventListener("click", function(e){
    e.preventDefault();

    showModal(modalCallback);
});