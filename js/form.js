var on = false;
var last
var timeOpen;
var timeClose;
var deltaTime;

function display(what){
	if((on == false)||(last!=what)){
		last = what;
		if(what == 'signUp'){
			timeOpen = Date.now();
			document.getElementById('signUpIn').innerHTML = '<div class="form secondColor">\
				<div class="text textColor">\
					<h1>Регистрация</h1>\
				</div>\
				<div class="row">\
					<form role="form" name="reg" method="post" onsubmit="validateAll(reg)">\
						<p class="textSize textColor">Ваше имя<input name="login" type="text" class="textarea" size="40"></p>\
						<p class="textSize textColor">Электронная почта<input name="email" type="text" class="textarea" size="40"></p>\
						<p class="textSize textColor">Придумайте пароль<input name="pass1" type="password" class="textarea" size="40"></p>\
						<p class="textSize textColor">Повторите пароль<input name="pass2" type="password" class="textarea" size="40"></p>\
						<input type="submit" class="button" value="Submit">\
					</form>\
				</div>\
			</div>';
			on = true;
		}else if(what == 'signIn'){
			timeOpen = Date.now();
			document.getElementById('signUpIn').innerHTML = '<div class="form secondColor">\
				<div class="text textColor">\
					<h1>Вход</h1>\
				</div>\
				<div class="row">\
					<form role="form" name="reg" method="post" onsubmit="validateAll(reg)">\
						<p class="textSize textColor">Электронная почта<input name="email" type="text" class="textarea" size="40"></p>\
						<p class="textSize textColor">Пароль<input name="pass2" type="password" class="textarea" size="40"></p>\
						<p class="textSize textColor"><input type="submit" class="button" value="Submit"></p>\
					</form>\
				</div>\
			</div>';
			on = true;
		}
		blockSize();
	}else remove();
}

function remove(){
	console.log("1");
	timeClose = Date.now();
	deltaTime = timeClose - timeOpen;
	
	if(deltaTime >= 5){
		document.getElementById('signUpIn').innerHTML = "";
		document.getElementById('blockWindow').style.cssText = "";
		on = false;
	}
}

function blockSize(){
	var sizeMenuBar = document.getElementById('menuBar').clientHeight + 10;
	document.getElementById('signUpIn').style.top = sizeMenuBar + "px";
	if(on == true){
		var sizeSite = document.getElementById('content').clientHeight + document.getElementById('footer').clientHeight;
		document.getElementById('blockWindow').style.cssText="\
		background: black; \
		width:100%; \
		height:" + sizeSite + "px; \
		position: absolute; \
		top:0px; \
		left:0px; \
		opacity: 0.3;";
	}
}