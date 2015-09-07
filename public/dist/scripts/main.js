$("#click-team").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});
$("#click-cover").click(function() {
    $('html, body').animate({
        scrollTop: $("#cover").offset().top
    }, 1000);
});
$("#click-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$("#click-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});

$( document ).ready(function() {
  $('.isabelle, .teun, .bob').addClass('hide');

var header = new Waypoint({
  element: document.getElementById('team'),
  handler: function() {
   $(".masthead").css({"background-color": "rgba(255,255,255,.75"});
    $(".masthead-nav > li > a, .masthead-brand").css({"color": "#000"});
    $(".masthead-nav > .active > a").css({"color": "#000"}).css({"border-bottom-color": "#000"});
  },
  offset: '90%'
});

var team = new Waypoint({
  element: document.getElementById('team'),
  handler: function() {
   $(".isabelle").addClass('show, fadeIn');
   $(".teun").addClass('show, fadeIn');
   $(".bob").addClass('show, fadeIn');
  },
  offset: '70%'
});

});