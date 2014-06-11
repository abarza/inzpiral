//jQuery to collapse the navbar on scroll

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
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

function muestramodal() {
    $('#demo').modal('show');
}
