function submitter(evt){
	emptyCheck = document.getElementById('username').value;
	code = evt.which;
	if(code == 13 && emptyCheck != "" && emptyCheck != "_"){
		loginCookie();
		setTimeout("location.href ='gamePage.html'",50);
	}
}

function loginCookie(){ 
	value = document.getElementById("username").value;
	e_value = escape(value);
	document.cookie = "username =" + e_value + "; path=/";
}

function blinker(){
	int = setInterval("blink()",500);
	document.onkeypress = focuser;
}

function blink(){
	if(document.getElementById("username").value == ""){
		document.getElementById("username").value = "_";
	}
	else if(document.getElementById("username").value == "_"){
		document.getElementById("username").value = "";
	}
	else{
	}
}

function stopBlink(){
	clearInterval(int);
	var tests = document.getElementById("username").value;
	if(tests=="_"){
		document.getElementById("username").value = "";
	}
	document.onkeypress = submitter;
}

function focuser(event){
	emptyCheck = document.getElementById('username').value;
	if(emptyCheck == "" || emptyCheck == "_"){
		code = event.which;
		key = String.fromCharCode(code);
		if(47 < code < 91){
			document.getElementById('username').focus();
			document.getElementById('username').value = key;
		}
	}
}

function setCookie(name, value, expiration) {

    if (name == "")				//if no cookie name, return
        return;

    if (expiration == "")			//if no expiration, set to 0
        expiration = 0;

    today   = new Date();                   	//today's date
    elapse  = today.getDate() + expiration; 	//elapse  = today + exp days
    expDate = new Date();                       //today's date
    expDate.setDate(elapse);                    //set expDate to elapsed days

    if (expiration == 0)    
        document.cookie = name + "=" + value + "; path=/";
    else
        document.cookie = name + "=" + value + "; path=/;" +
                         " expires=" + expDate.toGMTString();    
}

function getCookie(name) {

    var value = '';

    var httpCookies = document.cookie;		    //get all the cookies
    var allCookies  = httpCookies + "; "            //append '; ' at the end

    var found = allCookies.indexOf(name);            //find the cookie name 
    if (found >=0) {                                 //if cookie name is found
        var beg = allCookies.indexOf("=",found) +1   //get the beginning of value
        var end = allCookies.indexOf(";",found)      //get the end of value            
        value = allCookies.substring(beg,end);       //extract of the value
    }
    return(value);				     //return the cookie value
}