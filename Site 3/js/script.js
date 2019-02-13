$(document).ready(function(){
	var imageHrefs = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"] // массив картинок
	var imageIndex = 0;  // Счетчик, указывающий на текущую картинки
	var galleryImage = $("#gallery-image");
	function right_arrow() // Открытие следующей картинки(движение вправо)
	{
		if (imageIndex < imageHrefs.length-1) imageIndex++;
		else{
			imageIndex = 0;
		}
		galleryImage.fadeOut('fast', function () {
			galleryImage.attr('src', imageHrefs[imageIndex]);
			galleryImage.fadeIn('fast');
		});
	}

	function left_arrow() // Открытие предыдущей картинки(движение влево)
	{
		if (imageIndex > 0) imageIndex--;
		else{
			imageIndex = imageHrefs.length-1;
		}
		galleryImage.fadeOut('fast', function () {
			galleryImage.attr('src', imageHrefs[imageIndex]);
			galleryImage.fadeIn('fast');
		});
	}

	$('#gallery-left-arrow').click(left_arrow)
	$('#gallery-right-arrow').click(right_arrow)

	$('.reservation-position').click(function(){
		$(this).toggleClass('inactive')
		$('.body').removeClass('noscroll');
	})
	$('.reservation-box').click(function(event){
		event.stopPropagation()
	})
	$('.reservation__button').click(function(){
		$('.reservation-position').toggleClass('inactive')
		$('.body').addClass('noscroll');
	})

	$('.nav-item').click(function(){
		$('#toggle').removeAttr('checked')
	})
	$('.close-box').click(function(){
		$('#toggle').removeAttr('checked')
	})
	$('.container').click(function(event){
		event.stopPropagation()
	})
	$(".slide-animation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 800 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
	$('.play-link').click(function(){
		$('.body').addClass('noscroll');
		$('.video-block').slideDown('slow', function() {
			//Добавить iframe class="iframe" . Удалить width and height
			$('.video-block__position').append('<iframe class="iframe" src="https://www.youtube.com/embed/4d7ixL36oA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		})
	});
	$('.video-block').click(function(){
		$('.body').removeClass('noscroll');
		$('.video-block').slideUp('slow', function() {
			$('.iframe').remove();
		});
	});
	//отключаем временно ссылки в Food-menu
	$('a.food-menu__link').click(function() { return false;
	});
	$(function(){
		$(window).scroll(function() {
			if($(this).scrollTop() >= 10) {
				$('.menu-wrap').removeClass('menu-wrap__inactive');
				$('.menu-wrap').addClass('menu-wrap__active');
				}
			else{
				$('.menu-wrap').addClass('menu-wrap__inactive');
				$('.menu-wrap').removeClass('menu-wrap__active');
			}
		});
	});

	var pichrefs = ["img/menu-1.jpg","img/menu-2.jpg","img/menu-3.jpg","img/menu-4.jpg","img/menu-5.jpg","img/menu-6.jpg"] // массив картинок
	var picIndex = 0;  // Счетчик, указывающий на текущую картинки
	var galleryPic = $(".food-gallery__img");

	function btn_right_arrow() // Открытие следующей картинки(движение вправо)
	{
		if (picIndex < pichrefs.length-1) picIndex++;
		else{
			picIndex = 0;
		}
		galleryPic.fadeOut('fast', function () {
			$('.food-gallery__wrap').scrollTop(0);
			galleryPic.attr('src', pichrefs[picIndex]);
			galleryPic.fadeIn('fast');
		});
	}

	function btn_left_arrow() // Открытие предыдущей картинки(движение влево)
	{
		if (picIndex > 0) picIndex--;
		else{
			picIndex = pichrefs.length-1;
		}
		galleryPic.fadeOut('fast', function () {
			$('.food-gallery__wrap').scrollTop(0);
			galleryPic.attr('src', pichrefs[picIndex]);
			galleryPic.fadeIn('fast');
		});
	}

	$('.food-gallery__left-arrow').click(btn_left_arrow)
	$('.food-gallery__right-arrow').click(btn_right_arrow)

	$('.click_item-1').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-1.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 0;
	});
	$('.click_item-2').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-1.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 0;
	});
	$('.click_item-3').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-6.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 5;
	});
	$('.click_item-4').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-1.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 0;
	});
	$('.click_item-5').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-4.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 3;
	});
	$('.click_item-6').click(function() {
		$('.food-gallery__img').attr('src', "img/menu-5.jpg");
		$('.food-gallery').addClass('food-gallery__active');
		$('.body').addClass('noscroll');
		$('.food-gallery__wrap').scrollTop(0);
		picIndex = 4;
	});

	$('.food-gallery').click(function() { 
		$('.food-gallery__img').attr('src', "");
		$('.food-gallery').removeClass('food-gallery__active');
		$('.body').removeClass('noscroll');
	});
	$('.food-gallery__img').click(function(event){
		event.stopPropagation()
	})
	$('.food-gallery__left-arrow').click(function(event){
		event.stopPropagation()
	})
	$('.food-gallery__right-arrow').click(function(event){
		event.stopPropagation()
	})
})