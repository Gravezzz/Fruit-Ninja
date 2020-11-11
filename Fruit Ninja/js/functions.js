//создание рандомного числа
function random(max) {
	var sluchaynoeChislo = 1 + Math.random() * (max + 1);
	sluchaynoeChislo = Math.floor(sluchaynoeChislo);
	return sluchaynoeChislo; //возврат рандомного числа
}



/*===================
Создание Блоков
===================*/

/* Создание стартового блока*/
function sozdanieStartBlock() {
	startBlock = document.createElement("div");
	startBlock.id = "start-block";

	startKnopka = document.createElement("button");
	startKnopka.id = "start-knopka";
	startKnopka.innerText = "Начать";

	startBlock.appendChild(startKnopka); //вставка кнопки в старт блок

	igraPole.appendChild(startBlock); // вставка старт блока в игру
			
}

// создание очков
function starsCreator() { 
	stars.id = "stars";
	stars.innerText = 0;
	igraPole.appendChild(stars);
}
//создание жизней
function sozdanieLifes() {
	lifes = document.createElement("div");
	lifes.id = "lifes";

	lifeCounter = 0;
	while (lifeCounter < colichestvoLifes){
	var span = document.createElement("span");
	lifes.appendChild(span);
	lifeCounter++;
	}
	
	igraPole.appendChild(lifes);
}
//создание таймер блока на 10 сек
function sozdanieTimerBlock() {
	h2 = document.createElement("h2");
	h2.innerText = "Время: ";
	h2.id = "TimerRem";
	infoBlock.appendChild(h2);
	timerBlock = document.createElement("span");
	timerBlock.id = "timer";
	timerBlock.innerText = "10";
	h2.appendChild(timerBlock);
}


function ballCreator() {
	var ball = document.createElement("div"); //creating div

	var napravlenie =random(2); //1-left 2-right

	if(napravlenie == 1){ //опредиления направления вылета шарика
		ball.className = "ball left";
	}else{
		ball.className = "ball right";
	}

	ball.onmousemove = function() {	
	
		if(ball.className != "ball waiting"){
	
	points += random(5); //рандом очки
	
	stars.innerText = points;
	
		setTimeout(function() {
	
	ball.remove(); //удаление шарика

	var sushestvueBall = document.querySelector(".ball"); //не создавать шары пока есть старые на игровом поле
	if (sushestvueBall == null){

	var col = random(5);
	
	var tek = 0;
	
	while(tek<col){
		ballCreator();
		tek++;
	}
}
	},200);

		if(points >= 15) //если 15 и больше очков закончить игру
	{
		gameOver();
		setTimeout(function() {//создание плоскости где буду все шарики что бы потом легко их удалять
			fonBalls = document.createElement("div"); //фон на котором будут все шарики что бы удалять его и создавать снова
			igraPole.appendChild(fonBalls);
	},202)
	}
}
	ball.className = "ball waiting"; 
}
	fonBalls.appendChild(ball);
	setTimeout(function() {
		ball.style.top = random(350) + "px";
		ball.style.left = random(550) + "px";
	}, 100)

  	//опускаем шарик вниз и -жизнь
	setTimeout(function() {
		ball.style.transition = "all 0s";
		var timerBall = setInterval(function() {
			ball.style.top = ball.offsetTop + 2 + "px";
			// если вышел из поля то удалям шарик - жизнь и создаем новое
			if(ball.offsetTop > 500){
				ball.remove();

				ballCreator();

				colichestvoLifes--;

				if(colichestvoLifes == 0){ //если кончились жизни то конец игры
					gameOver();
				}

				udalenieLifes();

				sozdanieLifes();
				//очищяем Интервал
				clearInterval(timerBall); 
			}
		},10)
	}, 1000)
}

		// создание блока конца игры и показ результатов
		function sozdanieKoniecIgra() {
			var div = document.createElement("div");
			div.id = "koviec-igra";

			var h2 = document.createElement("h2");
			h2.innerText = "Игра окончена!";
			var h3 = document.createElement("h3");
			h3.innerText = "Вы набрали: " + points + " очков";
			div.appendChild(h2);
			div.appendChild(h3);
			igraPole.appendChild(div);

		}

/*=====================
Удаление элементов
=====================*/

//удаление старт блока
function udalenieStartBlock() {
	var startBlock = document.querySelector("#start-block");
	startBlock.remove();
}
//удаление таймер блока
function udalenieTimerBlock() {
	h2.remove();
}
//удаление жизней 
function udalenieLifes() {
	lifes.remove();
}
//удаление очков
function udalenieStars() {
	stars.remove();
}	

//очситка поле от шариков в конце игры
function ochistitIgraPole() {
	igraPole.innerText = "";
}