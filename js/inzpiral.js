/* Carousel of children */
$('.carousel').carousel({
  interval: 5000
});

/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' });

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top-100;
  $('body,html').animate({scrollTop:posi},700);
});


//jQuery to collapse the navbar on scroll

$(window).scroll(function() {
    if ($("#topbarnav").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".logo-normal").addClass("logo-small");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo-normal").removeClass("logo-small");
    }
});

$(function() {

    //jQuery for page scrolling feature - requires jQuery Easing plugin

    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //Toggle menu en mobile

     var navMain = $(".navbar-main-collapse");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });


});

// Not used today
function muestramodal() {
    $('#demo').modal('show');
}
