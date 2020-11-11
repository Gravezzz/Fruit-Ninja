start(); 
function start() {
	sozdanieStartBlock();

	starsCreator();
	//
	

	startKnopka.onclick = startGame;
}



function startGame(){
	udalenieStartBlock();
	sozdanieTimerBlock();
	timerGame();
	ballCreator();

	starsCreator();

	sozdanieLifes();

	//lifes.style.display = "block";

}





RightButton.onclick = function() {
	ball.style.left = ball.offsetLeft + 10 + "px";
	ball.style.width = ball.offsetWidth - 10 + "px";
	ball.style.height = ball.offsetHeight - 10 + "px";
}

stars.onclick = function() {
	points = 0;
	stars.innerText = points;
}


function gameOver() {

	udalenieTimerBlock();
	udalenieLifes();
	udalenieStars();
	setTimeout(function() {
		ochistitIgraPole();
	sozdanieKoniecIgra();
	}, 202)
	

	startKnopka.onclick = startGame;

	console.log("Игра окончена!");
	console.log(points);
	clearInterval(chasy);
}


function timerGame() {
		timerBlock.innerText = 10;
	chasy = setInterval(function() {
	timerBlock.innerText = timerBlock.innerText - 1;
	if(timerBlock.innerText == 0){
		clearInterval(chasy);
		gameOver();
	}
}, 1000)
}