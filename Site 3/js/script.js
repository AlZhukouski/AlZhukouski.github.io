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
})