
$(function(){   

        

    $(window).on('load', function(e){        
        function loadOpinion(){
            //wczytaj odpowiedniego JSONa
            $.getJSON("../scripts/Dates/opinie.json")
            .done (function(data){
                $('.loader').remove();
                var msg = [];
                for (let x = 0; x < data.opinie.length; x++){
                    
                    msg[x]="<div class='content_wrapper-opinion'> "+
                                "<h1>" + data.opinie[x].name + "</h1>"+
                                "<p>" + data.opinie[x].description + "</p>"+
                            "</div>"
                } 
                
                //pusta kartka z plusem
                $('.content_wrapper').append("<div class='content_wrapper-opinion'> "+
                                                "<img src='../image/Plus-icon.png' alt='Dodaj' id='addOpn'>"+
                                            "</div>");

                //pokaż wszystkie elementy JSON
                for (let w = 0; w < msg.length; w++){
                    $('.content_wrapper').append(msg[w]).hide().fadeIn(200);                
                } 
                $('#addOpn').unbind('click').bind('click', function(){
                    $('#addOpn').parent().html("<form class=\"content_wrapper-opinion-add\" method='POST'> "+
                                                "<label>Twój podpis: </label><input type=\"text\" name='name' id='name'>"+
                                                "<label>Twoja opinia: </label><textarea type=\"text\" name='opinion' id='opinion'></textarea>" +
                                                "<input type=\"submit\" value=\"Dodaj\" id='sendOpn'>"+
                                                "</form>");
                        //Dodaj opinie
                        $('.content_wrapper-opinion-add').submit(function(e){
                            e.preventDefault();
                            //$(this).parent().parent().remove();
                            
                            var opn = {
                                name: $("#name").val(),
                                description: $("#opinion").val()
                            }
  
                            $.ajax({
                                'url':'../scripts/Dates/opinie.json',
                                'method':'POST',
                                'dataType': 'json',
                                'processData': false,
                                'contentType': 'application/json',
                                'data': opn,
                                 'success': function(){
                                     alert('dodano opinie')
                                 }
                                
                                });
                        });

                        
                    });
            })
            //jeśli sie nie uda wczytac z serwera
            .fail(function(){
                $('.content_wrapper').html("<h1>Przepraszamy, nie udało się wczytać produktów</h1>")
            });

            
            
        }
        loadOpinion();

        


     });
});