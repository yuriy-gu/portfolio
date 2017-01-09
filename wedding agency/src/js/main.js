$(document).ready(function() {

  //fixed nav scroll
  $(window).scroll(function(){
    var top = $(document).scrollTop();
    if (top > 20) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  //scrolling window(navigation)
  $('.nav__text-style').click( function () {
    var scroll_el = $(this).attr('href');
      if ( $(scroll_el).length != 0 ) {
        $('html, body').animate({
          scrollTop: $(scroll_el).offset().top
          }, 700);
      }
    document.location = scroll_el;
    return false;
  });

  //pop_up
  $('.open_gallery').click(function () {
    var src = $(this).data('src'),
         num = $(this).data('fotoarr'),
         fromtop = $(document).scrollTop(),
         h3 = $(this).siblings('h3').text(),
         p = $(this).siblings('.result__wed-name').text();
    $('#pop_gallery h3').text(h3);
    $('#pop_gallery p').text(p);
    $('#pop_gallery .pop_foto').html('')
    var i = 0;
    while( i<=src.length && i<=20 ) {
      i++;
      $('#pop_gallery .pop_foto').append('<img src=" ' + src + i + 'res.jpg" alt="">')
    }; 
    $('#overlay').fadeIn(200, function () {
      var pop = $('#pop_gallery');
      pop.removeClass('hidden').css('top', fromtop + 95);
      setTimeout(function () {
        pop.addClass('opened');
      }, 50)
    });
    return false
   });

  // displaing none after animation 
  function addClassHiddenAfterAnimation(e) {
    var time = parseFloat(e.css('transitionDuration')) * 200;
    setTimeout(function () {
      e.addClass('hidden');
    }, time + 1);
  };

  //clsoe function
  $('#overlay, .close').click(function () {
    addClassHiddenAfterAnimation($('.opened'))
    $('.opened').removeClass('opened');
    $('#overlay').fadeOut();
  });

  //show more works(portfolio)
  $('.more-results').click(function () {
      var el = $(this);
      el.slideUp();
      el.siblings('.hidden').slideDown();
      return false
  });

  //contact form show function
  $('.open').click(function (event) {
    var info = $(this).data('info');
    event.preventDefault();
    $('#overlay').fadeIn(200,
      function () {
        var pop = $('.pop_form');
        pop.removeClass('hidden');
        setTimeout(function () {
          pop.addClass('opened').find('input.info').val(info);
        }, 50)
      });
  });

 // waypoint animation to about_block(list-text)
  $('.list-text').each(function (i) {
    var el = $(this),
         translateLeft = 'translateLeft400',
         translateRight = 'translateRight400';
    
    function leftRight () {
      if (i % 2) {
        el.addClass(translateLeft);
      } else {
        el.addClass(translateRight);
      }
    }
    leftRight();
    //show at 50%
    $(el).waypoint(function (dir) {
      if (dir === 'down') {
        el.removeClass(translateLeft).removeClass(translateRight);
      } else {
        leftRight();
      }
    }, { 
    offset: '70%' 
    })
    //hide from top
    $(el).waypoint(function(dir) {
      if (dir === 'down') {
        leftRight();
      } else{
       el.removeClass(translateLeft).removeClass(translateRight);
      }
      },  {
      offset: -70
      })
  });  //end waypoint animation to about_block(list-text)

        // $('#ideal ul li .b_text').each(function (i) {
        //     var el = $(this),
        //         cll = 'translateLeft400',
        //         clr = 'translateRight400';
        //     if (i % 2) {
        //         el.css({
        //             opacity: '0'
        //         }).addClass(clr);
        //     } else {
        //         el.css({
        //             opacity: '0'
        //         }).addClass(cll);
        //     }
        //     $(el).waypoint(function (direction) {
        //         el.animate({
        //             opacity: '1'
        //         }, 300).removeClass(cll).removeClass(clr)
        //     }, {
        //         offset: '50%'
        //     })
        // });
        // $('#press ul li').each(function (i) {
        //     var el = $(this),
        //         zoom = 'zoom';
        //     el.css({
        //         opacity: '0'
        //     }).addClass(zoom);
        //     $('#press ul').waypoint(function (direction) {
        //         //                el.animate({
        //         //                    opacity: '1'
        //         //                }, 300).removeClass(zoom)
        //         setTimeout(function () {
        //             el.animate({
        //                 opacity: '1'
        //             }, 300).removeClass(zoom);
        //         }, 150 * i);
        //     }, {
        //         offset: '50%'
        //     })
        // });




//  //slider
// $('.slider').slick({
//   arrows: false,
//   infinite: true,
//   speed: 3000,
//   fade: true,
//   cssEase: 'ease-out',
//   autoplay: true,
//   autoplaySpeed: 3000
// });

});