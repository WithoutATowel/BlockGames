window.onload = function(){
	var score = localStorage.getItem('score');
	var scoreDate = localStorage.getItem('scoreDate');
	document.getElementById('scoreValue').innerHTML = score;
	document.getElementById('scoreDate').innerHTML = scoreDate;
	document.getElementById('playAgain').onclick = function(){
	location.href = "gamePage.html";
	}
}
	