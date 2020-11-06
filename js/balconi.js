// клик по кнопке узнать стоимость

$(".article__button").click(function(e){
    e.preventDefault();

    showModal($("#modal-callback"));

});