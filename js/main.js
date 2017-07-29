$(document).ready(function(){
    $('.cta-img').waypoint(function(direction){
        $('.cta-img').addClass('animated slideInUp');
        $('.iphone-btn').delay(1500).animate({top: "+=3"},200);
        $('.iphone-btn').delay(200).animate({top: "+=-3"},100);
        $('.iphone-on').addClass('animated fadeIn');
    },{
        offset: '70%'
    });
    
});