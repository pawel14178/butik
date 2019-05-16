$(function(){
    
    //Duże sklep
    $("#basket").on('click',function(){  
        $(".container").css({"-webkit-transform":"translateX(-300px)", "transition":".4s"});
        $("html").addClass('stop-scrolling');
        $("#menu").css("transform","translateY("+scrollY+"px)");
        //Przycisk gotowe
        $('#menu_ready').on('click', function(){
            $('#menu_contact').css({
                "-webkit-transform":"translateX(0)",
                "transition":".4s",
                "opacity":"1"
            });
            $('#menu_ready').remove();
        });
//Przycisk submit
        $('#shop_contact').submit(function(e){
            alert("Aktualnie jest brak możliwości kupowania produktów, przepraszamy")
            var name = $('#name').val();
            var lastname = $('#lastname').val();
            var email = $('#email').val();
            var street = $('#street').val();
            var post = $('#post').val();
            var city = $('#city').val();
            var products = $('#myList').text();

            var contact = "Pani " + name + " " + lastname + " (e-mail: "+email+")\nkupiła: " + products +
                        "\nNa adres: ul." + street + " \n" + city + " " + post + "."
            
            if (!name || !lastname || !email || !street || !post || !city){
                alert("Uzupełnij wszystkie pola")
            }
            else{
                e.preventDefault();
                $(this).get(0).reset();
                
                $.ajax({
                    url: "https://formspree.io/anna@angelzory.pl",
                    method: "POST",
                    data: contact.serialize(),
                    dataType: "json"
                })
            }

        });




        $('#menu_contact-close').on('click', function(){
            $('#menu_contact').css({
                "-webkit-transform":"translateX(300px)",
                "transition":".4s",
                "opacity":"0"
            });
            $('#menu_ready').text('Gotowe!');
        });
    });
    $("#menu_btn-close").on('click',function(){          
        $(".container").css({"-webkit-transform":"none", "transition":".4s"});
        $("html").removeClass('stop-scrolling');
    });

    //Menu responsywne
    var clicked = false;
    $(".rwd_top").on('click', function(){
        $(".rwd_menu-modal-content a").unbind('click').bind('click', function(){
            $('.rwd_menu-modal').css({
                '-webkit-transform':'scale(0)'
            });
            clicked = false;
            $(".rwd_top p").text("MENU");
            $("html").removeClass('stop-scrolling');
        });
        if (clicked === true){
            
                $('.rwd_menu-modal').css({
                    '-webkit-transform':'scale(0)'
                });
                clicked = false;
                $(".rwd_top p").text("MENU");
                $("html").removeClass('stop-scrolling');
        }
        
        else{            
            $('.rwd_menu-modal').css({
                '-webkit-transform':'scale(1) translateY('+scrollY+"px)"
            });
            clicked = true;            
            $(".rwd_top p").text("ZAMKNIJ"); 
            $("html").addClass('stop-scrolling');
            
        }
    });


 });
