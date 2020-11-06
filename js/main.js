
// masked

$(".input-phone").mask("+7 (999)-999-99-99");

// ----

$('.burger').click(function(){
    $(this).toggleClass("burger_active");

    $(".header-nav").toggleClass("header-nav_hidden");

    $('body').toggleClass("locked");

    $('#overlay-body').toggleClass("overlay_hidden");

    if (window.pageYOffset > $(".header").offset().top && window.pageYOffset < ($(".header").offset().top+$(".header").height()))
    {
        $('html, body').scrollTop(0);
    }
});


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

$("#overlay-body").click(function(){
    if ($(".burger").hasClass("burger_active")) {
        $(".burger").removeClass("burger_active");
        $(".header-nav").addClass("header-nav_hidden");
        $('body').removeClass("locked");
        $(this).addClass("overlay_hidden");
    }
});



// модальные окна

$("#overlay-modal").click(function(){
    $(".modal").each(function(){
        $(this).addClass("modal_hidden");
    });

    $(this).addClass("overlay_hidden");
    $('body').removeClass("locked");
});

$(".modal").each(function(){
    let modal = $(this);

    $(this).find(".modal__close").click(function(){
        modal.addClass("modal_hidden");

        $("#overlay-modal").addClass("overlay_hidden");
        $('body').removeClass("locked");
    });
});

function showModal(modal) {
    modal.removeClass("modal_hidden");
    $("#overlay-modal").removeClass("overlay_hidden");
    $('body').addClass("locked");
}

function hideModal(modal) {
    modal.addClass("modal_hidden");
    $("#overlay-modal").addClass("overlay_hidden");
    $('body').removeClass("locked");
}



// проверка заполненности полей
function getEmpty (form) {
    const req = form.querySelectorAll(".req");

    let empty = 0;

    req.forEach((elem,index) => {
        if(elem.type === "checkbox")
        {
            if (!elem.checked) {
                elem.parentNode.querySelector(".checkbox__text").style.borderBottom = '1px solid red';
                empty++;
            }
            else {
                elem.parentNode.querySelector(".checkbox__text").style.borderBottom = '';
            }
        }
        else {
            
            if (!elem.value.trim())
            {
                elem.style.borderBottom = '1px solid red';
                empty++;
            }
            else {
                elem.style.borderBottom = '';
            }
        }
    });

    return empty;
}




// обратный звонок



// кнопка обратного звонка (в header)
$('.button-callback').on('click', function(e){
    e.preventDefault();

    showModal($("#modal-callback"));
});


// обработчик формы обратного звонка
$('.form-callback').submit(function(e){
    e.preventDefault();

    if (getEmpty(e.target) === 0) {
        $.ajax({
            url: '/php/callbackHandler.php',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json'
        });

        e.target.reset();
        hideModal($("#modal-callback"));
        showModal($("#modal-success"));
        
    }
});


