
// fix video ratio
$(window).resize(function(){
    var winWidth = $(window).width();
    var boxWidth = $('.content__video__play').width();

    if(winWidth <=560) {
        $('.content__video__play').height(boxWidth*0.5625);
    }
});