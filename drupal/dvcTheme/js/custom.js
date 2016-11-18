(function($) {
  // Drupal.behaviors.selectList = {
  //   attach: function(context, settings) {
  //     var chosenSettings = {
  //       select: {
  //         disable_search: true,
  //         width: "100%"
  //       }
  //     };
  //     $('select', context).chosen(chosenSettings.select);
  //   }
  // };
  Drupal.behaviors.sliderFront = {
    attach: function(context, settings) {
      var carouselSettings = {
        frontSlider: {
          infinite: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          arrows: false
        }
      };
      $('.front-slider .view-content', context).on('init', function(){
        $(this).css('opacity', '1');
      });
      $('.front-slider .view-content', context).slick(carouselSettings.frontSlider);
    }
  };
  Drupal.behaviors.sticker = {
    attach: function(context, settings) {
      var stickySettings = {
        frontPageSticker: {
          topSpacing:0
        }
      };
      $('.front .header', context).sticky(stickySettings.frontPageSticker);
    }
  };
  Drupal.behaviors.dropDownMenu = {
    attach: function(context, settings) {
      this.toggleRespMenu('.dd-m', '.region-header', context);
      this.toggleRespMenu('.dd-d', '.drop-menu', context);
      this.toggleRespMenu('.main-menu > .content > .menu > .expanded > a',
        '.main-menu > .content > .menu > .expanded > .menu', context);
      this.closeMenu('on-open', '.active-menu', context);
      this.setHeight('.drop-down-menu');
    },
    toggleRespMenu: function(itemClick, showAll, context) {
      $(itemClick, context).addClass('on-open');
      $(showAll, context).addClass('drop-down-menu');
      $(itemClick, context).click(function(e) {
        e.preventDefault();
        $(showAll, context).slideToggle(function(){
          $(this, context).css('overflow', 'visible');
          $(this, context).toggleClass('active-menu');
        });
      });
    },
    closeMenu: function(el, menu, context) {
      $(document, context).click(function(e) {
        if($(menu).length>=1) {
          clicked = $(e.target);
          if(clicked.hasClass(el)) {
            return false;
          } else {
            $(menu).each(function() {
              $(this, context).removeClass('active-menu');
              $(this, context).slideUp();
            });
          };
        };
      });
    },
    setHeight: function(el, context) {
      var getWindowHeight = $(window).outerHeight(true);
      $(el).css('max-height', getWindowHeight);
      $(window).resize(function(){
        getWindowHeight = $(window).outerHeight(true);
        $(el).css('max-height', getWindowHeight);
      });
    }
  };
  Drupal.behaviors.readMore = {
    attach: function(context, settings) {
      this.appendBtn('.front .view-tax-services .view-content',
        'read-more-btn',
        'Read more', context);
      this.dropMenu('.read-more-btn', context);
    },
    appendBtn: function(wrapper, btnClass, text, context) {
      $(wrapper, context).append('<div class='+btnClass+'>'+Drupal.t(text)+'</div>');
    },
    dropMenu: function(clickBtn, context) {
      $(clickBtn).click(function(event) {
        $(this, context).prevAll('.views-row').toggle();
      });
    }
  };
  Drupal.behaviors.setTitle = {
    attach: function(context, settings) {
      this.title('.user-aq .to-profile', context);
    },
    title: function(el, context) {
      $(el).hover(function() {
        var title = $(this).text();
        $(this, context).attr('title', title);
      }, function() {
        $(this, context).attr('title', '');
      });
    },
  };
  Drupal.behaviors.tittleAppending = {
    attach: function(context, settings) {
      this.switchWrapper('.ordering .pane-title', '.ordering-main-wrapp', context);
    },
    switchWrapper: function (el, wrapperToPrepend, context) {
      $(el, context).prependTo(wrapperToPrepend);
    }
  };
  Drupal.behaviors.ctools_backdrop_close = {
    attach: function(context, settings){
      $('#modalBackdrop').once('ctools-use-modal', function(){
        $(this).click(function() {
          Drupal.CTools.Modal.dismiss();
        });
      });
    }
  };
Drupal.behaviors.form_close = {
  attach: function(context, settings){
    $('.page-profile-customer-edit .about-me-a').click(function(e){
      e.preventDefault();
        $('.page-profile-customer-edit .about-me').addClass("active");
        $('.page-profile-customer-edit .favorited,.page-profile-customer-edit .settings,').removeClass("active");
        $('.page-profile-customer-edit .second-column, .page-profile-customer-edit .third-column').hide('fast');
        $('.page-profile-customer-edit .first-column').show('fast');
    })
    $('.page-profile-customer-edit .favorited-a').click(function(e){
      e.preventDefault();
        $('.page-profile-customer-edit .favorited').addClass("active");
        $('.page-profile-customer-edit .about-me,.page-profile-customer-edit .settings,').removeClass("active");
        $('.page-profile-customer-edit .first-column, .page-profile-customer-edit .third-column').hide('fast');
        $('.page-profile-customer-edit .second-column').show('fast');
    })
    $('.page-profile-customer-edit .settings-a').click(function(e){
      e.preventDefault();
        $('.page-profile-customer-edit .settings').addClass("active");
        $('.page-profile-customer-edit .about-me,.page-profile-customer-edit .favorited,').removeClass("active");
        $('.page-profile-customer-edit .first-column, .page-profile-customer-edit .second-column').hide('fast');
        $('.page-profile-customer-edit .third-column').show('fast');
    })
  }
};

})(jQuery);
