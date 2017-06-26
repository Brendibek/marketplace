var menuCat;
var menuSubcat;
function menuCatY(){
	menuCat = document.getElementById('contentButton').offsetTop + document.getElementById('contentButton').clientHeight - 1;
	document.getElementById('menuCat').style.top = menuCat + "px";
}

function menuSubcatY(num){
	menuSubcat = document.getElementById('menuCat').clientHeight;
	document.getElementById('menuSubcat' + num).style.top = menuSubcat-3 + "px";
	
	console.log(document.getElementById('menuSubcat').style.top);
}