
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav")

burger.addEventListener("click", onBurgerClick);

function onBurgerClick(e) {
    const targ = e.target;

    targ.closest(".burger").classList.toggle("burger_active");

    headerNav.classList.toggle("header-nav_hidden");

    document.querySelector("body").classList.toggle("locked");

    if (window.innerWidth <= 576) {
        window.scrollTo(0,0);
    }
}


// scroll

const animDuration = 200;

const header = document.querySelector(".header");

const offset = header.offsetTop;

window.addEventListener("scroll", windowOnScroll);

function windowOnScroll() {
    if (window.pageYOffset > offset) {
        header.classList.add("header_fixed");
    }
    else {
        header.classList.remove("header_fixed");
    }
}

if (window.innerWidth <= 576) {
    window.removeEventListener("scroll", windowOnScroll);
}