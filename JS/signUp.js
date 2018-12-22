window.onload = function() {
	document.getElementById("okButton1").onclick = function(){
	document.getElementById("errorMsg").style.display = "none";
	}
}
function validateForm(){

	document.getElementById("f1").className ="hidden";
	document.getElementById("f2").className ="hidden";
	document.getElementById("f3").className ="hidden";
	document.getElementById("f4").className ="hidden";
	document.getElementById("f5").className ="hidden";
	
	var errorMsg = "";
	
	if(document.getElementById("first").value == ""){
		document.getElementById("f1").className ="show";
		errorMsg = 'yes';
	}
	if(document.getElementById("last").value==""){
		document.getElementById("f2").className ="show";
		errorMsg = 'yes';
	}
	var emailEntry = document.getElementById("email").value;
	if(!emailEntry.match(/^\w+(\.\w+)*@[0-9A-z]+\.[A-z]{2,4}$/)){
		document.getElementById("f3").className ="show";
		errorMsg = 'yes';
	}
	if(document.forms["signUp"]["gender"][0].checked==false &&
	   document.forms["signUp"]["gender"][1].checked==false){
		document.getElementById("f4").className ="show";
		errorMsg = 'yes';
	}
	var ageEntry = document.getElementById("age").value;
	if(!ageEntry.match(/^\d+$/)){
		document.getElementById("f5").className ="show";
		errorMsg = 'yes';
	}
	if(errorMsg != ""){
		document.getElementById("errorMsg").style.display = "block";
	}
	if(errorMsg != ""){
		return false;
	}
}