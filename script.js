//modal ze zdjeciami
$(function(){
    var btn = $('.product-image');
    var span = $('.close');
    
    btn.on('click',function(){
        $(".modal-content_picture").css({
            "background-image":"url("+this.src+")"
        });
        $(".modal-content p").text($(this).siblings().children(".description").text());
        $('#modal').css({'display': 'block'});
    });
    span.on('click',function(){
        $('#modal').css({'display': 'none'});
    });
});