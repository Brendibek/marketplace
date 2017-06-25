var slideIndex = 1;
var click=true;
var animation=true;
var timeout;

nextSlide();

function next_prev(n) {
	if(click != true) return;
	
	slideIndex += n;
	nextSlide();
}

function currentDiv(n) {
	if(click != true) return;
	
	if(slideIndex == n)animation = false;
	slideIndex = n;
	nextSlide();
}

function carusel(){
	slideIndex += 1;
	nextSlide();
}

function nextSlide() {
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("slider-dot");
	
	if (slideIndex > slides.length) {slideIndex = 1}    
	if (slideIndex < 1) {slideIndex = slides.length}
	
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slides[slideIndex-1].style.display = "block";
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = "slider-dot";
	}
	dots[slideIndex-1].className = "slider-dot slider-dot-white";
	
	if(animation == true) opacityImage(slides);
	else animation=!animation;
	
	clearTimeout(timeout);
	timeout = setTimeout(carusel, 5000);
}

function opacityImage(image){
	var k=0;
	click = false;
	image[slideIndex-1].style.opacity = 0;
	var test = setInterval(
		function(){
			if(image[slideIndex-1].style.opacity != 1){
				image[slideIndex-1].style.opacity = k;
				k+=0.05;
			}
			else{
				click=true;
				clearInterval(test);
			}
		}, 25);
}