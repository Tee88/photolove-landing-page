$(document).ready(function(){
    $('.cta-img').waypoint(function(direction){
        $('.cta-img').addClass('animated slideInUp');
        $('.iphone-btn').delay(1500).animate({top: "+=3"},200);
        $('.iphone-btn').delay(200).animate({top: "+=-3"},100);
        $('.iphone-on').addClass('animated fadeIn');
    },{
        offset: '70%'
    });
    
    $('.col-4-app').waypoint(function(direction){
        $('.scalable').addClass('animated slideInLeft');
        $('.instant').addClass('animated slideInUp');
        $('.something').addClass('animated slideInRight');
    },{
        offset: '70%'
    });
    
    $('.clown-info').waypoint(function(direction){
        $('.clown-info').addClass('animated fadeIn');
    },{
        offset: '60%'
    });
    
    
    $(".nav li:nth-child(2)").click(function() {
        $('html, body').animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    
    $(".nav li:nth-child(3)").click(function() {
        $('html, body').animate({
            scrollTop: $(".clown").offset().top
        }, 1200);
    });
    
    $(".nav li:nth-child(5)").click(function() {
        $('html, body').animate({
            scrollTop: $(".clown").offset().top+700
        }, 1500);
    });
});