$(document).ready(function(){

$('.hamburger-icon').click(function(){
  $('.mobile-menu').addClass('open');
  $('.bar-one, .bar-two, .bar-three').toggleClass('change');

});

// function myFunction() {
//  var element = document.getElementById(".mobile-menu");
//  element.classList.remove(".open");
// };

$('.hamburger-icon').click(function(){
  $('.mobile-menu').removeClass('open');
  $('.bar-one, .bar-two, .bar-three').toggleClass('change');

});

});
