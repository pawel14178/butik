$(function(){
    
    //Duże sklep
    $("#basket").on('click',function(){  
        $(".container").css({"-webkit-transform":"translateX(-300px)", "transition":".4s"});
        $("html").addClass('stop-scrolling');
        $("#menu").css("transform","translateY("+scrollY+"px)");
        $('#menu_ready').on('click', function(){
            $('#menu_contact').css({
                "-webkit-transform":"translateX(0)",
                "transition":".4s",
                "opacity":"1"
            });
            $('#menu_ready').text('Kup');
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
