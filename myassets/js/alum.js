//link tester
console.log('POGGERS');

//initialize AOS.js
AOS.init();

//jquery initialization
$(function(){

$('#scrollbtn1').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});











});
