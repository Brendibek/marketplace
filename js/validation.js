var exceptSymbols = ['<', '>', '/', '\\', '[', ']', '{', '}'];
var isEmptyMessage = 'Empty field';

function validateAll(regForm){
  var login = regForm.login.value;
  var email = regForm.email.value;
  var pass1 = regForm.pass1.value;
  var pass2 = regForm.pass2.value;
  
	var submit = 0;
  if(!isEmpty(login)){
		if(errorSymbolsValidation(login))
			submit++;
	}else 
			console.log(isEmptyMessage + login);
	
	if(!isEmpty(email)){
		if(errorSymbolsValidation(email))
			if(emailValidation(email))
				submit++;
	}else 
			console.log(isEmptyMessage + email);
		
	if(!isEmpty(pass1)){ 
		if(passValidation(email, pass1))
			if(pass1 == pass2)
				submit++;
			else
				console.log('Passwords is differences');
	}else 
			console.log(isEmptyMessage + email);
	
	if(submit == 3)
	console.log('Submited');
}

function passValidation(email, password){
	if(password.length >= 6){
		var emailParts = email.split('@');
		if(emailParts[0] != password)
			return true;
		else{
			console.log('wrong password');
			return false;
		}
	} else{
		console.log('Password is too short');
	}
}

function errorSymbolsValidation(str){
  for(var i = 0; i < exceptSymbols.length; i++){
  	if(!(str.indexOf(exceptSymbols[i]))){
  	  var message = "Used symbols (";
  	  for(var j = 0; j < exceptSymbols.length; j++)
  	    message += exceptSymbols[j] + ", ";
  	  message += ")";
  	  console.log(message);
  	  break;
			return false;
  	}else if (i == exceptSymbols.length - 1)
			return true;
  }
}

function emailValidation(email){
	var dog, dogCount = 0;
  var dot, dotCount = 0;
	var validated = false;
  for(var i = 0; i < email.length; i++){
  	switch(email.charAt(i)){
			case '@':
				if(dogCount == 0)
					dog = i;
				dogCount++;
  	  	break;
  	  case '.':
				dot = i;
				dotCount++;
  	  	break;
  	}
  }
	if(dogCount == 1 && dotCount > 1)
		if((dog > 0 && dog < email.length - 1) && (dot > 0 && dot < email.length - 1))
			if(dot > dog + 1)
				if(email.charAt(0) != '.')
					validated = true;
	
	if(!validated){
		console.log("wrong e-mail");
		return false;
	}else return true;
}

function isEmpty(str){
	if(str.length == 0) return true;
	else return false;
}
