var cellIds = ["id1","id2","id3","id4","id5","id6","id7","id8","id9"];
var cellValues = [""];
var sumIds = ["sum1","sum2","sum3","sum4","sum5","sum6"];
var num1 = "";
var num2 = "";
var cell1 = "";
var cell2 = "";

window.onload = function(){
var uname = getCookie("username");
uname = unescape(uname);
document.getElementById("usename").innerHTML = uname;
for(i=1;i<10;i++){
	idvar="id"+i;
	document.getElementById(idvar).onclick = numGrab;
	}
sumUpdate();
document.getElementById("okButton1").onclick = function() {
	document.getElementById("introText").style.display = "none";
	}
document.getElementById("okButton2").onclick = storeHighScore;
}

function numGrab(){
this.className = "boardCellHighlight";
numbr = this.innerHTML;
idval = this.id;
if(cell1 == ""){
	cell1 = idval;
	}
	else {
	cell2 = idval
	}
if(num1 == ""){
	num1 = numbr;
	}
	else {
	num2 = numbr;
	}
if(num2 != ""){
	numSwitch()
	}
}

function numSwitch(){
num1 = parseInt(num1);
num2 = parseInt(num2);
document.getElementById(cell2).innerHTML = num1;
document.getElementById(cell1).innerHTML = num2;
document.getElementById(cell2).className = "boardCell";
document.getElementById(cell1).className = "boardCell";
num1 = "";
num2 = "";
cell1 = "";
sumUpdate();
scoreUpdate();
}

function sumUpdate(){
l = 0;
for(i=0;i<9;i++){
	var bar = "id"+(i+1);
	foo = document.getElementById(bar).innerHTML;
	foo = parseInt(foo);
	cellValues[i] = foo;
	}
for(i=0;i<3;i++){							//sum rows. "i" is for the sumId, "j" is for each cell value
	sumVar = 0;								//in a row, "l" is for the starting point of each row.
	for(j=0;j<3;j++){						
		sumVar = sumVar + cellValues[j+l];
		}
	document.getElementById(sumIds[i]).innerHTML = sumVar;
	l+=3
	}
for(i=3;i<6;i++){							//sum columns. "i" is for starting point and sumId. "k"
	sumVar = 0;								//is for collecting the values.
	for(k=0;k<7;k=k+3){	
		boo = i+k-3;
		sumVar = sumVar + cellValues[boo];
		}
	document.getElementById(sumIds[i]).innerHTML = sumVar;
	}
checkWin();
}

function scoreUpdate(){
	var token = document.getElementById("score").innerHTML;
	token = parseInt(token);
	if(token>0){
		token--;
		}
	document.getElementById("score").innerHTML = token;
}

function checkWin() {
var coo = "";
for(i=0;i<6;i++){
	hoo = document.getElementById(sumIds[i]).innerHTML;
	hoo = parseInt(hoo);
	if(hoo != 15){
		coo="wrong";
		}
	}
if(coo == ""){
	document.getElementById("winText").style.display = "block";
	}
}

function storeHighScore() {
	var scoreFoo = document.getElementById("score").innerHTML;
	var oldScore = localStorage.getItem('score');
	oldScore = parseInt(oldScore);
	if(oldScore == NaN || scoreFoo > oldScore){
		var adate = new Date();
		adate = adate.toDateString();
		scoreFoo.toString();
		localStorage.setItem('score', scoreFoo);
		localStorage.setItem('scoreDate', adate);
		}
	location.href = "scorePage.html";
}