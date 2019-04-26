$(function(){    

    var $text = $('#txtArea');
    var $email = $('#email');
    var $btn = $('#sendOpinie');

    $($btn).on("click", function(event){
        event.preventDefault()
        
        var content = $text.val();
        var user = $email.val();
        var newData = "Opinia: " + content + " Klient: "+ user;

        $.post("/angel/scripts/Dates/opinie.php", newData, function(){
            alert('Dziękujemy za dodanie opinii');
        });
                 
    });
});