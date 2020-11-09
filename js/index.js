// Клик по кнопке "Записаться на замер"

$(".hero__button").click(function(){
    let offset = $(".offer").offset().top;

    $('html, body').animate({scrollTop: offset}, 1000);
});



// Обработка формы на замер

$('.form-zamer').on("submit",function(e){
    e.preventDefault();

    if (getEmpty(e.target) === 0) {
        showModal($("#modal-success"));
        
        $('body').addClass("locked");

        $.ajax({
            url: '/php/zamerHandler.php',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(data) {
                console.dir(data);
            }
        });

        $(this).trigger("reset");
    }

});


// Галерея работ



$(document).ready(function(){
    $(".gallery__item").fancybox();
});