$(document).ready(function() {
 
 //navigation  
  $('.nav-list__item-link').on('click',function(){
    $('.nav-list__item').children().removeClass('nav_active');
    $(this).addClass("nav_active");
  });
  //mobile
  $('.mobile-nav_title').click(function(){
    $('.nav-list').toggle('slow');
    $('.nav-list__item').click(function(){
      $('.nav-list').css('display', 'none');
    })
  });

 //slider
   $('.slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      slidesToShow: 4,
      arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 3,
      arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      arrows: false
      }
    }
  ]
});

});