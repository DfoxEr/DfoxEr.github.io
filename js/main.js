
// masked

$(".input-phone").mask("+7 (999)-999-99-99");

// ----

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", onBurgerClick);

function onBurgerClick(e) {
    const targ = e.target;

    targ.closest(".burger").classList.toggle("burger_active");

    headerNav.classList.toggle("header-nav_hidden");

    document.querySelector("body").classList.toggle("locked");

    if (window.pageYOffset > header.offsetTop && window.pageYOffset < (header.offsetTop+header.clientHeight)) {
        window.scrollTo(0,0);
    }

    overlay.classList.toggle("overlay_hidden");
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



// модальные окна

const modals = document.querySelectorAll(".modal");


modals.forEach( (el) => {
    el.querySelector(".modal__close").addEventListener("click", function(e) {
        e.preventDefault();

        e.target.closest(".modal").classList.add("modal_hidden");
        document.querySelector("body").classList.remove("locked");

        overlay.classList.add("overlay_hidden");
    });
} );

overlay.addEventListener("click", function(e){
    document.querySelectorAll(".modal").forEach((elem) => {
        elem.classList.add("modal_hidden");
    });
    e.target.classList.add("overlay_hidden");
    
    if (burger.classList.contains("burger_active")) {
        burger.classList.remove("burger_active");
        headerNav.classList.add("header-nav_hidden");
    }
});