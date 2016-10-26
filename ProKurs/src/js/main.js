$(document).ready(function() {

  //parallax effect
   $('.s_review').parallax({imageSrc: './img/sliderBg.jpg'});

  //header will take all screen (min-width: 640px)
  function hResize() {
    $('#header').css('min-height', $(window).height());
  };
  $(window).resize(function() {
    hResize();
  });

  //tabs top_line
  $('.top_phone .wrapper .tab').click(function() {
    $('.top_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.top_phone .tab_item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  //tabs_header
  $('.tabs_header .wrapper .tab').click(function() {
    $('.tabs_header .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs_header .tab_item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  //tabs .contacts_top
  $('.contacts_top .tab').click(function() {
    $('.contacts_top .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.s_contacts .tab_item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  $(".bottom_phone .wrapper .tab").click(function() {
    $(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  //carousel
  $(".owl-carousel").owlCarousel({
    dots : true, // true for pagination
    responsive : {
      0 : {
        items : 1,
        nav : true
      }
    },
    navText : ""
  });

  $(".content_items").addClass("animated zoomIn");

});
