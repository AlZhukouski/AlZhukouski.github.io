new fullpage('#fullpage', {
		 navigation: true,
		 scrollOverflow: true
		});

var slides1 = document.querySelectorAll('#slides1 .slide1');
var currentSlide1 = 0;

function nextSlide1(){
	goToSlide1(currentSlide1+1);
}

function previousSlide1(){
	goToSlide1(currentSlide1-1);
}

function goToSlide1(n){
	slides1[currentSlide1].className = 'slide1';
	currentSlide1 = (n+slides1.length)%slides1.length;
	slides1[currentSlide1].className = 'slide1 showing';
}

var next1 = document.getElementById('next1');
var previous1 = document.getElementById('previous1');

next1.onclick = function(){
	nextSlide1();
};
previous1.onclick = function(){
	previousSlide1();
};
var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;

function nextSlide2(){
	goToSlide2(currentSlide2+1);
}

function previousSlide2(){
	goToSlide2(currentSlide2-1);
}

function goToSlide2(n){
	slides2[currentSlide2].className = 'slide2';
	currentSlide2 = (n+slides2.length)%slides2.length;
	slides2[currentSlide2].className = 'slide2 showing';
}

var next2 = document.getElementById('next2');
var previous2 = document.getElementById('previous2');

next2.onclick = function(){
	nextSlide2();
};
previous2.onclick = function(){
	previousSlide2();
};

