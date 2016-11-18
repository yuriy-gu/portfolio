$(document).ready(function() {

  // navigation
  var $menu = $(".i-dot-nav"), // кэшируем в переменную меню
      $links = $menu.find("a"); // кэшируем в переменную ссылки

  $links.click( function() {
    $menu.children().removeClass("dot-nav_active"); // убираем класс у всех пунктов
    $(this).parent().addClass("dot-nav_active"); // добавляем к пункту, содержащему нажатую ссылку
  });

  //slider
   $('.slick-slider').slick({
    // autoplay: true,
    dots: true
   });


});
