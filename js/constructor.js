// Весь конструктор


$(".constructor-windows__window").click(function(){

    $("#dver").removeAttr("disabled");
    
    $(".constructor-windows__window").each(function(){
        $(this).removeClass("constructor-windows__window_selected");
    });
    
    $(this).addClass("constructor-windows__window_selected");
    
    let windowType = $(".constructor").find("input[name='window-type']:checked").val();

    let imgSrc = "/img/constructor/okno"+($(this).index()+1)+"/"+windowType+".jpg";
    
    $("#window-selected").val(imgSrc);

    $("#constructor__bigImg").attr("src", imgSrc);


    if (($(this).index()+1) === 4) {
        $("#dver").attr("disabled", "disabled");
    }
});




$(".constructor").find("input[name='window-type']").each(function(index){
    $(this).on("change", function(){
        let windowIndex = $(".constructor-windows__window_selected").index();
        
        let imgSrc = "/img/constructor/okno"+(windowIndex+1)+"/"+$(this).val()+".jpg";

        $("#window-selected").val(imgSrc);

        $("#constructor__bigImg").attr("src", imgSrc);


        if ((index+1) == 4) {
            $(".constructor-windows__window").eq(3).css("display", "none");
        }
        else {
            $(".constructor-windows__window").eq(3).css("display", "flex");
        }
    });
});





// обработка формы

$(".form-constructor").on("submit", function(e) {
    e.preventDefault();

    if (getEmpty(e.target) === 0)
    {
        showModal($("#modal-success"));

        $.ajax({
            url: '/php/constructorHandler.php',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'html',
            success: function(data) {
                console.dir(data);
            }
        });

        e.target.reset();

        $(".constructor-windows__window").each(function(index){
            if (index === 0) {
                $(this).addClass("constructor-windows__window_selected");
            }
            else {
                $(this).removeClass("constructor-windows__window_selected");
            }
        });
    }
 });