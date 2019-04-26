$(function(){
    
    //Duże sklep
    $("#basket").on('click',function(){  
        $(".container").css({"transform":"translateX(-300px)", "transition":".4s"});
        $("html").addClass('stop-scrolling');
        $("#menu").css("transform","translateY("+scrollY+"px)");
    });
    $("#menu_btn-close").on('click',function(){          
        $(".container").css({"transform":"none", "transition":".4s"});
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
