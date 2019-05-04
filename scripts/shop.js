$(function(){
    var times;

    //po kliknieciu produktu w menu
    $('#products_menu').on('click', 'button', function(e){
        
        //$('.wrapper__section').html('<div class="loader">Wczytywanie produktów...</div>');
        e.preventDefault();
        var loc = this.id;
        //$('.wrapper__section').html('');
        function loadScript(){
            $.getScript('scripts/basket.js')
                .fail(function(){
                    alert("Nie udało się załadować do końca strony, odśwież stronę.");
                });
            $.getScript('script.js')
                .fail(function(){
                    alert("Nie udało się załadować do końca strony, odśwież stronę.");
                })
        };
        function loadProduct(){
            //wczytaj odpowiedniego JSONa
            $.getJSON("scripts/Dates/"+ loc +".json")
            .done (function(data){
                times = data;
                var msg = [];
                for (let x = 0; x < times[loc].length; x++){
                    
                msg[x]="<div class=\"wrapper__section-picture\">" +
                                "<img src=" + times[loc][x].image +" class=\"product-image\" >"+ 
                            "<div class=\"wrapper__section-info\">" +
                                "<p class=\"description\">"+times[loc][x].description + " "+loc+" " + times[loc][x].name + " <b> "+times[loc][x].price+"</b> zł </p>" +
                                "<h2>Dostępna w rozmiarach: </h2>"+
                                    "<div class=\"wrapper__section-size\">"; 
                    
                            
                                for (let i = 0; i < times[loc][x].size.length ; i++)
                                {
                                    msg[x] +="<button>"+ times[loc][x].size[i] +"</button>"
                                }
                               
                    msg[x]+=        "</div>" +
                                "<div class=\"wrapper__section-add_btn\">" +
                                    "<button>Dodaj do koszyka</button>" +
                                "</div> "+
                            "</div>" +
                            "<div class='extra_image'>";
                            for (let i = 0; i < times[loc][x].extra.length ; i++)
                            {                                    
                                msg[x] +="<img src=" + times[loc][x].extra[i] +" class=\"extra_image-product\" >";
                            }
                    msg[x]+="</div>" +
                        "</div>";
                }

                //pokaż wszystkie elementy JSON
                for (let w = 0; w < msg.length; w++){                   
                    
                        $('.wrapper__section').append(msg[w]).hide().fadeIn(300);
                    
                }
                
            })
            //jeśli sie nie uda wczytac z serwera
            .fail(function(){
                $('.wrapper__section').html("<h1>Przepraszamy, nie udało się wczytać produktów</h1>")
            });

        }

        loadProduct();
        loadScript();

    });
});