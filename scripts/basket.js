$(function(){        
    // Dodanie klasy do wybranego produktu
    var sizebtn = null;
    $('.wrapper__section-size').on('click','button', function(){
        $('.wrapper__section-size button:focus').addClass("hot");   
        sizebtn = $('.wrapper__section-size button:focus').text();      
    });
    var btn = 1;
    var click = $('#basket h1').text();
    var sum = parseInt( $('#menu_sum b').text());
    //Znalezenie nazwy wybranego produktu 
    $('.wrapper__section-add_btn button').on('click', function(){
        var price = parseInt($('.hot').parent().siblings().children().html());
        var check = $('.hot').parent().siblings(".description").text();
        
        if (check === ''){
            alert("Wybierz produkt");
        }
        else{
            $("#basket h1").text(++click);
            if (click >= 1){         
                $('.wrapper__section-size button').removeClass("hot");
                //Dodanie nazwy do listy bocznej
                var prod = "<li>"+check + " - " + sizebtn + " <button class=\"rem\">x</button></li>";
                $('#myList').append(prod);
                sum = sum + price;
                
                //Usuwanie z listy
                $(".rem").unbind('click').bind('click', function(e){
                    var newPrice = ($(this).siblings().html());
                    $(this).parent().remove();
                    sum = sum - newPrice;
                    $("#menu_sum b").text(sum); 
                    $("#basket h1").text(--click);
                });

                $("#menu_sum b").text(sum); 
            }
        }
        
    });
});

