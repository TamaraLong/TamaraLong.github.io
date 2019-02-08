$(document).ready(function(){

  $('.hamburger-icon').click(function(){
    $('.mobile-menu').toggleClass('open');
    $('.bar-one, .bar-two, .bar-three, .hamburger-icon').toggleClass('change');
    $('body').toggleClass("fixedPosition");
  });
  $(window).resize(function() {
    if ($(window).width() > 800 && $('.mobile-menu').hasClass('open')) {
      $('.mobile-menu').toggleClass('open');
      $('.bar-one, .bar-two, .bar-three, .hamburger-icon').toggleClass('change');
      $('body').toggleClass("fixedPosition");
    }
  });
});
