$(function(){
    $('#form_new').on('click', function(){
        $('.return_form').css({'-webkit-transform':'scale(1)'});
        $('#form_btn-close').on('click',function(){
            alert("Aktualnie jest brak możliwości zgłaszania zwrotów, przepraszamy")
            $('.return_form').css({'-webkit-transform':'scale(0)'});         
        });
        $('#return_form-send').on("click", function(e){
            e.preventDefault();
            alert("Aktualnie jest brak możliwości zgłaszania reklamacji przez stronę internetową. Przepraszamy")
        });
    });
});