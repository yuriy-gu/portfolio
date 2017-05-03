$(document).ready(function() {

  /* ===================================================
                                                      MASK
  ===================================================*/
  $( '.form_tel' ).mask("+7 (999) 999 99 99");



  /* ===================================================
                                WAYPOINT ANIMATION
  ===================================================*/
  if (screen.width > 960) {
    var trL = 'translateLeft400',
         trR = 'translateRight400';

    //background show (cars opacity)
    $('.offerList__item, .banner_btmBg, .offer_btmBg').each(function () {
      var el = $(this);
      $(el).waypoint(function (direction) {
        if (direction === 'down')
          el.animate({
            opacity: '1'
          }, 500)
      }, {
        offset: '70%'
      })
    });


    //        left right animation
    $('.proposeList__item_img, .reasons-list__item').each(function (i) {
      var el = $(this);
      function oddEven () {
        if (i % 2) { el.css({ opacity: '0' }).addClass(trL); } 
        else { el.css({ opacity: '0' }).addClass(trR); }
      }
      oddEven()

      $(el).waypoint(function (direction) {
        if (direction === 'down')
          el.animate({
            opacity: '1'
          }, 300).removeClass(trL).removeClass(trR)
      }, {
        offset: '50%'
      })

      $(el).waypoint(function (direction) {
        if (direction === 'up')
        oddEven()
        }, {
          offset: "50%"
      })
    });

    $('.scheme-list__item').each(function (i) {
      var el = $(this);
      if (el.hasClass('transalateLeft')) {
        el.css({
          opacity: '0'
        }).addClass(trL);
      } else {
        el.css({
          opacity: '0'
        }).addClass(trR);
      }
      $(el).waypoint(function (direction) {
        setTimeout(function () {
          el.animate({
            opacity: '1'
          }, 200).removeClass(trL).removeClass(trR);
        }, 200 * i);
      }, {
        offset: '70%'
      })
    });

  }//screen.width>960



  /* ===================================================
                                    SLIDER CATALOG
  ===================================================*/
  $(function () {
    //        variables
    var catalog = $('.js-catalog__content'),
         NavigationPages = $('.js-catalog__nav a'),
         catalogpages = catalog.find('.catalog__page'),
         item = catalogpages.find('.js-catalog__item'),
         a = item;
    //        add unic data-atrr to each item
    catalogpages.each(function (i) {
      var el = $(this);
      el.find('.js-catalog__item').each(function (e) {
        $(this).attr('data-number-page', (i + 1));
        $(this).attr('data-number-item', (e + 1));
      })
    });
    //        add current SRC to IMG in item
    item.each(function () {
      var el = $(this),
           img = el.find('img'),
           pageNumber = el.data('number-page'),
           itemNumber = el.data('number-item'),
           a = el,
           classPop;
      switch (pageNumber) {
        case 1:
          classPop = 'audi'
          break;
        case 2:
          classPop = 'vw'
          break;
        case 3:
          classPop = 'skoda'
          break
      }
      img.attr('src', 'img/catalog/' + pageNumber + '/prew/' + itemNumber + '.png');
      a.attr('href', 'catalog/' + pageNumber + '/' + itemNumber + '.html').addClass(classPop);
      a.click(function () {
        var href = a.attr('href'),
             text = a.find('h3').text(),
             fromtop = $(document).scrollTop();
        $('#pop_catalog').removeClass('audi vw skoda')
                                .addClass(classPop)
                                .attr('brend', pageNumber)
                                .attr('item_number', itemNumber)
                                .load(href, function () {
          $('#overlay').fadeIn(200,
            function () {
              var pop = $('#pop_catalog');
                   pop.removeClass('hidden').css('top', fromtop + 50);
              setTimeout(function () {
                pop.addClass('opened');
                  }, 50);
              pop.find('.js-item__h').text(text);
              pop.find('.js-item-img').attr('src', 'img/catalog/' + pageNumber + '/' + itemNumber + '.png')
            });
          });
            return false
          });
      });


      //    catalog
      $('.catalog__content').slick({
        adaptiveHeight: true,
        arrows: false
      });
      NavigationPages.each(function (i) {
        $(this).attr('data-page-number', i)
      });
      NavigationPages.click(function (e) {
        e.preventDefault();
        var el = $(this),
             number = $(this).data('page-number');
        catalog.slick('slickGoTo', number, false);
        setTimeout(function () {
          $('.js-catalog__nav .active').removeClass('active');
          el.addClass('active')
        })
      });
      catalog.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#js-nav-catalog .active').removeClass('active');
        $('#js-nav-catalog li').eq(currentSlide).find('a').addClass('active')
      });
    });
  


  /* ===================================================
                                   RESULT SLIDER
  ===================================================*/
    //  taking img from folder
    $('.case__fade-slider img').each(function (i) {
      $(this).attr('src', 'img/results/' + (i + 1) + '.jpg')
    });
   //   fade_slide
    $('.case__fade-slider').each(function () {
      $(this).find('.main_foto').attr('data-slidenum', '0');
    });

    $('.main_foto').each(function () {
      var src = $(this).siblings('img').eq(0).attr('src').split('/');
      //    console.log(src)
      $(this).css({
        backgroundImage: 'url(img/' + src[1] + '/' + src[src.length - 1] + ')'
      });
      $(this).wrap('<a href=""></a>');
      //    opening fancybox group
      var srcArrow = [] //array of references to pictures of one block
      //    small img path
      $(this).parent().siblings('img').each(function (i) {
            var src_small = $(this).attr('src').split('/');
            var src = 'img/' + src_small[1] + '/' + src_small[src_small.length - 1]
            srcArrow[i] = src
        });
        // click at medium img
        $(this).closest('a').click(function () {
                var num = $(this).find('.main_foto').attr('data-slidenum');
                var srcArrowStart = srcArrow.slice(num),
                    srcArrowFinish = srcArrow.slice(0, num)
                var srcArrowNew = srcArrowStart.concat(srcArrowFinish);
                //    console.log(srcArrowNew);
                //    console.log(num)
                $.fancybox(srcArrowNew);
                return false
            })
            //      opening fancybox group
    });
    $('.case__fade-slider img').click(function () {
        var cont = $(this).siblings('a').children('.main_foto'),
             src = $(this).attr('src').split('/'),
             lastChildArr = src[src.length - 1],
             slideNum = lastChildArr.split('.')[0] - 1;
        while (slideNum > 5) {
            slideNum = slideNum - 5
        }
        $(cont).attr('data-slidenum', slideNum);
        $(cont).css({
            backgroundImage: 'url(img/' + src[1] + '/' + src[src.length - 1] + ')'
        })
    });



  /* ===================================================
                                    MAP
  ===================================================*/
 // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }
  var onMapClickHandler = function (event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }
  // Enable map zooming with mouse scroll when the user clicks the map
  $('.map-container').on('click', onMapClickHandler);



//menu
    // $('.nav a').click(function () {
    //     var scroll_el = $(this).attr('href');
    //     if ($(scroll_el).length != 0) {
    //         $('html, body').animate({
    //             scrollTop: $(scroll_el).offset().top
    //         }, 700);

    //     }
    //     document.location = scroll_el;
    //     return false;
    // });

    // //    map 
    // ymaps.ready(init);
    // var myMap,
    //     myPlacemark;

    // function init() {
    //     myMap = new ymaps.Map("map", {
    //         center: [55.662855, 37.536472],
    //         zoom: 16
    //     });
    //     myPlacemark = new ymaps.Placemark([55.661393, 37.542169], {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'img/marker.png',
    //         iconImageSize: [55, 79],
    //         iconImageOffset: [-28, -90]
    //     });

    //     myMap.geoObjects.add(myPlacemark);
    //     myMap.behaviors.disable('scrollZoom')
    // };

    // //    block certificate
    // $('#certificate ul li a').fancybox();
    // //
    // // displaing none after animation 
    // function addClassHiddenAfterAnimation(e) {
    //     var time = parseFloat(e.css('transitionDuration')) * 1000;
    //     setTimeout(function () {
    //         e.addClass('hidden');
    //     }, time + 1);
    // };

    // //    pop_ups
    // $('.js-open').click(function (event) {
    //     var info = $(this).data('info');
    //     event.preventDefault();
    //     $('#overlay').fadeIn(200,
    //         function () {
    //             var pop = $('.pop_form');
    //             pop.removeClass('hidden');
    //             setTimeout(function () {
    //                 pop.addClass('opened').find('input.info').val(info);
    //                 //                    if (info == 'Скачать прайс лист') {
    //                 //                        pop.find('.btn-red').text('Скачать прайс');
    //                 //                        pop.find('h3').text('Скачайте прайс');
    //                 //                        pop.find('p').text('Заполните заявку и через 1 секунду начнется скачивание прайс листа.');
    //                 //                    } else {
    //                 //                        pop.find('.btn-red').text('Оставьте заявку');
    //                 //                        pop.find('h3').text('Оставьте заявку');
    //                 //                        pop.find('p').text('Наш менеджер свяжется с Вами в течение 15 минут!');
    //                 //                    }
    //             }, 50)
    //         });
    // });
    // $('#overlay, .cls').click(function () {
    //     addClassHiddenAfterAnimation($('.opened'))
    //     $('.opened').removeClass('opened');
    //     $('#overlay').fadeOut();
    // });

  });