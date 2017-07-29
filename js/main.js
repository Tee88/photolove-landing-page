$(document).ready(function(){
    
    $("#nav-mobile").html($(".nav-main").html());
    $("#nav-trigger img").click(function(){
        if ($("#nav-mobile ul").hasClass("expanded")) {
            $("#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
    
    
    
    $('.cta-img').waypoint(function(direction){
        $('.cta-img').addClass('animated slideInUp');
        $('.iphone-btn').delay(1500).animate({top: "+=3"},200);
        $('.iphone-btn').delay(200).animate({top: "+=-3"},100);
        $('.iphone-on').addClass('animated fadeIn');
    },{
        offset: '70%'
    });
    
    
    if(window.matchMedia('(max-width: 935px)').matches) {
        $('.scalable').waypoint(function(direction){
        $('.scalable').addClass('animated slideInLeft');
    },{
        offset: '70%'
    });
        $('.instant').waypoint(function(direction){
        $('.instant').addClass('animated slideInRight');
    },{
        offset: '70%'
    });
        $('.something').waypoint(function(direction){
        $('.something').addClass('animated slideInLeft');
    },{
        offset: '70%'
    });
        }else{
            
        $('.col-4-app').waypoint(function(direction){
            $('.scalable').addClass('animated slideInLeft');
            $('.instant').addClass('animated slideInUp');
            $('.something').addClass('animated slideInRight');
        },{
            offset: '70%'
        });
        }
    
    
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
            scrollTop: $("footer").offset().top
        }, 1500);
    });
});