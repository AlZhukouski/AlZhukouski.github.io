$(document).ready(function(){
	var imageHrefs = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"] // массив картинок
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
	})
	$('.reservation-box').click(function(event){
		event.stopPropagation()
	})
	$('.reservation__button').click(function(){
		$('.reservation-position').toggleClass('inactive')
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
		$('.video-block').slideDown('slow', function() {
			//Добавить iframe class="iframe" . Удалить width and height
			$('.video-block__position').append('<iframe class="iframe" src="https://www.youtube.com/embed/v5bClGpH0iI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		})
	});
	$('.video-block').click(function(){
		$('.video-block').slideUp('slow', function() {
			$('.iframe').remove();
		});
	});
})