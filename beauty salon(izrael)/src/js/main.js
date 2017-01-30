function theRotator() {
  //set the opacity to all img
  $('.rotator li').css({opacity: 0});
  //take the first img and show it
  $('.rotator li:first').css({opacity: 1});
  //use function rotate(), img changes = 2sec
  setInterval('rotate()', 4000);
}
function rotate() {
   //take first image
   var currentImg = ($('.show') ? $('.show') : $('.rotator li:first'));
   //take next img, when we come to the last, start from the begining
   var next = ((currentImg.next().length) ? ((currentImg.next().hasClass('show')) ? $('.rotator li:first') : currentImg.next()) : $('.rotator li:first'));

  // connect the effect of the dissolution/attenuation to display images, css-class show has a bigger z-index
  next.css({opacity: 0}) 
        .addClass('show')
        .animate({opacity: 1}, 2000);
  //change the current img
  currentImg.animate({opacity: 0}, 2000)
                 .removeClass('show');
};

//window height = device height
function setH(){
  var windowHeight = $(window).innerHeight();
  if(windowHeight <= 1078) {
    windowHeight = $('.rotator').css("height", windowHeight - 740 / 2);
  } else {
    $('.rotator, .rotator__item_img').css("height", windowHeight - 740 / 2);
  }
}

$(document).ready(function() {
  theRotator();
});

window.onload = function(){
  setH();
}
window.onresize = function(){
  setH();    
}