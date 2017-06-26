function openImgProduct(num){
	var slides = document.getElementsByClassName("imgProduct");
	document.getElementById("openImg").src = slides[num].src;
}

var number = -1;
var style;
function resizeImg(num){
	var slides = document.getElementsByClassName("imgProduct");
	if(num!=number){
		style = slides[num].style.cssText;
		slides[num].style.cssText = "position:absolute; left:0; top:0;";
		console.log(slides[num].style.cssText);
		number = num;
	}else{
		slides[number].style.cssText = style;
		number = -1;
	}
	
}