var slide = document.getElementById('slide');
var firstRun = 1;
var slideImages = ["assets/images/slide_img/slide_1.png","assets/images/slide_img/slide_2.png", "assets/images/slide_img/slide_3.png"];
var countImges = slideImages.length;
var slideAddres = 0;
var delay = 3000;

function SlideShow () {
	slideAddres+= 1;
	if (slideAddres >= countImges) {slideAddres = 0;} 
	slide.src = slideImages[slideAddres];
}

setTimeout(setInterval(SlideShow, delay), delay);
