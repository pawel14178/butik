$(function(){       
    // Dodanie klasy do wybranego produktu
    var sizebtn = null;
    $('.wrapper__section-size').on('click','button', function(){
        $('.wrapper__section-size button:focus').addClass("hot");   
        sizebtn = $('.wrapper__section-size button:focus').text();      
    });

    var click = $('#basket h1').text();
    var sum = parseInt( $('#menu_sum b').text());
    //Znalezenie nazwy wybranego produktu 
    $('.wrapper__section-add_btn button').on('click', function(){
        var price = parseInt($('.description_price').text());
        var check = $('.hot').parent().siblings(".description").text();
        
        if (check === ''){
            alert("Wybierz produkt");
        }
        else{
            $("#basket h1").text(++click);
            if (click >= 1){         
                $('.wrapper__section-size button').removeClass("hot");
                //Dodanie nazwy do listy bocznej
                var prod = "<li>"+check + " - " + sizebtn + " <span hidden> " + price + " </span><button class=\"rem\">x</button></li>";
                $('#myList').append(prod);
                sum = sum + price;
                
                //Usuwanie z listy
                $(".rem").unbind('click').bind('click', function(e){
                    var newPrice = parseInt($(this).siblings("span").text());
                    $(this).parent().remove();
                    console.log(newPrice);
                    sum = sum - newPrice;
                    $("#menu_sum b").text(sum); 
                    $("#basket h1").text(--click);
                });

                $("#menu_sum b").text(sum); 
            }
        }
        
    });
});

