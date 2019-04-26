//Animacje zdjęć z menu na stronie głównej
$(function(){
    $(window).on('scroll', function(){
        
        $(".btn").css({
            'transform':'translateY(300px)'
        });        
        if (this.scrollY > 150){            
            $(".btn").css({
                'transform':'translateY(0)',
                'opacity':'1'
            });            
        }
        else{            
            $(".btn").css({
                'transform':'translateY(300px)',
                'opacity':'0'
            });            
        }
    });
    
    
    //tekst stopki
    $('.footer__section-myself p').text("Nasz sklep powstał dla kobiet które nie mają czasu na wędrówki po centrach handlowych a chcą szybko i pewnie zrobić zakupy.");
});






