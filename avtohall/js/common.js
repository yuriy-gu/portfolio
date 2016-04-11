$(document).ready(function() {

	//всплывающее меню
	$(".propos-item-wrap ul").each(function() {
	$(this).after("<div class='propos-item-wrap-triangle'></div>"); //добавили класс .propos_item_wrap_triangle
});
	//делаем всплывающее меню класса propos
	$(".propos-arr").click(function() { //по клику на class="propos_arr"
		if($(this).parent().parent().children("ul").is(":visible")){//елси родительский элемент и дочерний (ul) видимый то
			 $(this).parent().parent().children("ul").slideUp();//мы его закрываем с анимацией
			 $(this).parent().parent().children(".propos-item-wrap-triangle").hide();// и скрываем трегольник
			} else {
		$(".propos-item-wrap ul, .propos-item-wrap-triangle").hide();//вначале прячем список и треугольник
		$(".propos-item-wrap").removeClass("active");
		$(this).parent().parent().addClass("active");//(this) - это и есть элемент propos_arr. дальше код переходит к parent( )- это его родитель. Дальше ищем уже его родителя - parent(). а потом перходим к ребенку.﻿
		$(this).parent().parent().children("ul").fadeToggle(1000);//возвращаемся к ul и show - показываем (или slideToggle - Скрывает/раскрывает вложенный список используя эффект «скольжения» вниз и вверх)  
		$(this).parent().parent().children(".propos-item-wrap-triangle").fadeToggle(1000);//скрывает/показывает треугольник
	}
});


//equalheight - одинаковая высота колонок применяем к классу .boxes_item
$(window).load(function() {
	equalheight('.boxes-item');
});
$(window).resize(function(){
	equalheight('.boxes-item');
});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
});

