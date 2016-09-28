$(document).ready(function(){
   
    $(window).scroll(function(){
        
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
        
    });  
});



$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});


$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});




