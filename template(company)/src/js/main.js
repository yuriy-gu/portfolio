$(document).ready(function() {

 //navigation  
  $('.nav__item_text').on('click',function(){
    $('.nav__item').children().removeClass('active');
    $(this).addClass("active");
  });

$("a[href*= '#' ]").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });

  //fixed header
  $(window).scroll(function(){
    var top = $(document).scrollTop();
    if (top > 20) {
      $('.header').addClass('fixed__header');
    } else {
      $('.header').removeClass('fixed__header');
    }
  });
  //mobile
  $('#mobile_nav').click(function(){
    $('.main-nav').toggleClass('main-nav_mobile');
  });

//slider
$('.banner__slider').slick({
  nextArrow: '<span class="arrow-right"></span>',
  prevArrow: '<span class="arrow-left"></span>',
  speed: 1000,
  fade: true,
  cssEase: 'ease-out',
  // autoplay: true,
  // autoplaySpeed: 3000
});

//when button hover - title hover
$('.offer_btn').mouseover(function() {
  $(this).addClass('offer_active').parent().parent().find('.offer__item_title').addClass('offer_active');
  }).mouseout(function() {
  $(this).removeClass('offer_active').parent().parent().find('.offer__item_title').removeClass('offer_active')
  })

});