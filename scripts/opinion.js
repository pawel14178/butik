$(function(){    
    $(window).on('load', function(e){
        
        function loadProduct(){
            //wczytaj odpowiedniego JSONa
            $.getJSON("../scripts/Dates/opinie.json")
            .done (function(data){
                var msg = [];
                for (let x = 0; x < data.opinie.length; x++){
                    
                    msg[x]="<div class='content_wrapper-opinion'> "+
                                "<h1>" + data.opinie[x].name + "</h1>"+
                                "<p>" + data.opinie[x].description + "</p>"+
                            "</div>"
                } 
                
                //pokaż wszystkie elementy JSON
                for (let w = 0; w < msg.length; w++){
                    $('.content_wrapper').append(msg[w]).hide().fadeIn(200);
                
                } 
                
            })
            //jeśli sie nie uda wczytac z serwera
            .fail(function(){
                $('.content_wrapper').html("<h1>Przepraszamy, nie udało się wczytać produktów</h1>")
            });

            
            
        }

        loadProduct();
     });
});