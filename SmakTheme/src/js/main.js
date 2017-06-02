$(document).ready(function() {

 //navigation  
  $('.nav__item a').on('click',function(){
    $('.nav__item').children().removeClass('nav-active');
    $(this).addClass("nav-active");
  });

  //Smooth scrolling
$(".header-nav a[href*= '#' ]").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });

  //work tabs
  $('#work-tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  

  //proud numbers-counter
  $("#count-to").appear(function () {
    $(".timer").countTo();
  }, {
    accX: 0,
    accY: -150
  });


  //team tabs
  $('#team-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('.team-member-info').show('slow');
  })

  $('.close-info').click(function (e) {
    $('.team-member-info').hide('slow');
    $('#team-tabs li').removeClass('active')
  })


// skills circle
$(".circle").knob({ height: 144 });

$(window).scroll( function() {
var positionEl = $(".circle-wrapper").offset().top;
var positionElBot = $(".circle-block_end").offset().top;
var currentScrollTop = jQuery(window).scrollTop() + window.innerHeight
if (currentScrollTop >= positionEl && currentScrollTop <= positionElBot) {
 $(".dial").knob();
     $({animatedVal: 0}).animate({animatedVal: 90}, {
        duration: 4000,
        easing: "swing",
        height: function() { 
            $(this.i).css('height', '144px')
        },
        step: function() { 
            $(".dial").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 
    
    $(".dial1").knob();
     $({animatedVal: 0}).animate({animatedVal: 96}, {
        duration: 4000,
        easing: "swing",
        step: function() { 
            $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 
    
    $(".dial2").knob();
     $({animatedVal: 0}).animate({animatedVal: 85}, {
        duration: 4000,
        easing: "swing",
        step: function() { 
            $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 

    $(".dial3").knob();
     $({animatedVal: 0}).animate({animatedVal: 94}, {
        duration: 4000,
        easing: "swing",
        step: function() { 
            $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 
    }
  });


  //comment-slider
  $('.comment-slider').slick({
    dots: true,
    arrows: false
  });

});
