
// masked

$(".input-phone").mask("+7 (999)-999-99-99");

// ----

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");
const header = document.querySelector(".header");

burger.addEventListener("click", onBurgerClick);

function onBurgerClick(e) {
    const targ = e.target;

    targ.closest(".burger").classList.toggle("burger_active");

    headerNav.classList.toggle("header-nav_hidden");

    document.querySelector("body").classList.toggle("locked");

    if (window.pageYOffset > header.offsetTop && window.pageYOffset < (header.offsetTop+header.clientHeight)) {
        window.scrollTo(0,0);
    }
}


// scroll

const headerBody = document.querySelector(".header__body");


const offset = header.offsetTop + header.clientHeight;

window.addEventListener("scroll", onWindowScroll);

function onWindowScroll(e) {
    if (window.pageYOffset > offset) {
        if (!headerBody.classList.contains("header__body_fixed")) {
            headerBody.style.transform = 'translateY(-100%)';
            setTimeout(
                function() {
                    headerBody.style.transform = 'translateY(0)';
                    headerBody.classList.add("header__body_fixed");
                }
            ,100);
        }
    }
    else {
        headerBody.classList.remove("header__body_fixed");
    }
}


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