/// <reference path="../theme/js/jquery-1.11.3.min.js" />

var vw = $(window).width();
var vh = $(window).height();
var vid = document.getElementById("exploride-video");

$(window).load(function () {
    $(".preloader").fadeOut("slow");
    setTimeout(function () {
       
    }, 1000);
});
$(document).ready(function () {
    $("html").niceScroll({
        cursorcolor: '#ed513d',
        cursorborder: "1px solid transparent",
        zindex: '1',
        horizrailenabled:false,
    });
    $('.menu_toggler_md').click(function () {
        $('#menu').slideToggle();
    });
    $('.q_a_cont:first-child .a_cont').slideDown("slow");

    $('.q_cont i').click(function () {
        $('.q_cont i').removeClass('active');
        $(this).addClass('active');
        $('.q_a_cont .a_cont').slideUp("slow");
        $(this).parent('.q_cont').parent('.q_a_cont').children('.a_cont').slideDown();
    });

});
