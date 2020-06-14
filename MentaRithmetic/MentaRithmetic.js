const btnContainer = document.querySelector('#btn-container');

const blueBtn = document.querySelector('.blue-btn');
const blueLogo = document.querySelector('.blue-logo');

const greenBtn = document.querySelector('.green-btn');
const greenLogo = document.querySelector('.green-logo');

const yellowBtn = document.querySelector('.yellow-btn');
const yellowLogo = document.querySelector('.yellow-logo');

const redBtn = document.querySelector('.red-btn');
const redLogo = document.querySelector('.red-logo');

const greyBtn = document.querySelector('.grey-btn');
const greyLogo = document.querySelector('.grey-logo');

const iconArr = document.querySelectorAll('.icon');
const answerBtn = document.querySelector('.answerBtn');



var actualColor = "#2196f3";
var actualColorBtn = "#64b5f6";

document.body.style.background = "#2196f3";


setDisplay("rect","none")
setDisplay("params-container","none")

btnContainer.addEventListener('click', (e) => {
	if(e.target === blueBtn || e.target === blueLogo) {
		document.body.style.background = "#2196f3";
   		//changeBg('blue-bg', 'red-bg', 'yellow-bg', 'green-bg');
    	changeBtn(blueBtn, redBtn, yellowBtn, greenBtn, greyBtn);
    	changeIcon(0, 3, 2, 1, 4);
    	chooseDifficulty('easy');
   	 	actualColor = "#2196f3";
   	 	actualColorBtn = "#64b5f6";
  	}
  	if(e.target === greenBtn || e.target === greenLogo) {
  		document.body.style.background = "#4caf50";
    	//changeBg('green-bg', 'blue-bg', 'yellow-bg', 'red-bg');
    	changeBtn(greenBtn, blueBtn, yellowBtn, redBtn, greyBtn);
   		changeIcon(1, 0, 2, 3, 4);
    	chooseDifficulty('intermediate');
    	actualColor = "#4caf50";
   	 	actualColorBtn = "#81c784";
	}
  	if(e.target === yellowBtn || e.target === yellowLogo) {
  	  	document.body.style.background = "#ffb300";
    	//changeBg('yellow-bg', 'blue-bg', 'red-bg', 'green-bg');
   		changeBtn(yellowBtn, blueBtn, redBtn, greenBtn, greyBtn);
   		changeIcon(2, 0, 3, 1, 4);
    	chooseDifficulty('hard');
    	actualColor = "#ffb300";
   	 	actualColorBtn = "#ffca28";

	}
  	if(e.target === redBtn  || e.target === redLogo) {
   		document.body.style.background = "#e53935";
    	//changeBg('red-bg', 'blue-bg', 'yellow-bg', 'green-bg');
    	changeBtn(redBtn, blueBtn, yellowBtn, greenBtn, greyBtn);
    	changeIcon(3, 0, 2, 1, 4);
    	chooseDifficulty('veryhard');
    	actualColor = "#e53935";
   	 	actualColorBtn = "#ef5350";
  	}

   	if(e.target === greyBtn  || e.target === greyLogo) {
   		document.body.style.background = "#777777";
    	//changeBg('red-bg', 'blue-bg', 'yellow-bg', 'green-bg');
    	changeBtn(greyBtn, redBtn, blueBtn, yellowBtn, greenBtn);
    	changeIcon(4, 3, 0, 2, 1);
    	actualColor = "#777777";
   	 	actualColorBtn = "#a1a1a1";
   	 	clearTimeout(stopCountdown)
		setDisplay("timer","none")
		setDisplay("score","none")
		gamemode = "perso"
		lobby();
  	}

});

function changeBg(add, removeOne, removeTwo, removeThree, removeFour) {
	btnContainer.classList.remove(removeOne);
  	btnContainer.classList.remove(removeTwo);
  	btnContainer.classList.remove(removeThree);
  	btnContainer.classList.remove(removeFour);
  	btnContainer.classList.add(add);
}

function changeBtn(add, removeOne, removeTwo, removeThree, removeFour) {
	add.classList.add('active');
	removeOne.classList.remove('active');
	removeTwo.classList.remove('active');
	removeThree.classList.remove('active');
	removeFour.classList.remove('active');
}

function changeIcon(add, removeOne, removeTwo, removeThree, removeFour) {
	iconArr[add].classList.add('active');
	iconArr[removeOne].classList.remove('active');
	iconArr[removeTwo].classList.remove('active');
	iconArr[removeThree].classList.remove('active');
	iconArr[removeFour].classList.remove('active');

}


//----------------------------//



const btnTrain = document.querySelector('.btnTrain');
const btnTime = document.querySelector('.btnTime');

btnTrain.addEventListener('click', (e) => {
	chooseGamemode("train")
});
btnTime.addEventListener('click', (e) => {
	chooseGamemode("time")
});


//----------------------------//


difficulty = "easy"
gamemode = "train"
var operators = []
var indice
operatorsTab = []
indiceTab = 0

//var stop = 0
var stopCountdown

function chooseDifficulty(d){
	setDisplay("params-container","none")
	setColor("train","#777")
	setColor("time","#777")

	document.getElementById('result').value = ""
	operatorsTab = [];
	box = document.getElementsByName("checkbox");
	for (var i = 0; i < box.length; i++) {
		box[i].checked=false;
	}
	setDisplay("train", "inline-block");
	setDisplay("time", "inline-block");
	clearTimeout(stopCountdown)
	setDisplay("timer","none")
	setDisplay("score","none")
	setDisplay("rect","none");
	console.log(gamemode)
	if(gamemode!="" && gamemode!="perso"){
		setBG(gamemode,"#ffffff");
		setColor(gamemode,"#777");
	}
	difficulty = d
	//document.getElementById('affichage').innerHTML = d;
}

function chooseGamemode(g){
	//operatorsTab = [];
	document.getElementById('result').value = ""
	clearTimeout(stopCountdown)
	setDisplay("timer","none")
	setDisplay("score","none")
	if(gamemode!="" && gamemode!="perso"){
		setColor(gamemode,"#777");
	}
	gamemode = g
	play()
}


rightAnswer = 0
function play(){
	score = 0
	setBG("answer","#ffffff");
	setColor("answer",actualColor);
	setFontSize("answer","15px")
	setBG(gamemode,"#ffffff");
	setColor(gamemode,actualColor);

	console.log("You're playing in " + difficulty + " on " + gamemode + " gamemode")

	if(difficulty == "easy"){
		operators = ['+', '-']
		indice = 2;
	} 
	if(difficulty == "intermediate"){
		operators = ['+', '-', '*']
		indice = 3
	}
	if(difficulty == "hard"){
		 operators = ['+', '-', '*', '/']
		 indice = 4
	}
	if(difficulty == "veryhard"){
		operators = ['+', '-', '*', '/', "%"] 
		indice = 5
	}
	console.log("Operators available are " + operators)

	if(gamemode == "train"){
		train(operators)
	}else if (gamemode == "time"){
		countdown(10)
		time(operators)
	}

}

/*answerBtn.addEventListener('click', (e) => {
	
});*/

function train(operators){
	setDisplay("affichage","block");
	setDisplay("reponse","block");
	//setDisplay("skip","block")
	//setDisplay("timer","none")
	//setDisplay("score","none")

	setDisplay("rect","block")

	indiceO = getRandomInt(indice)

	if(operators[indiceO] == "/"){

		do{
			int1 = getRandomArbitrary(1,20)
			int2 = getRandomInt(20)
		}while(eval(int1 + operators[indiceO] + int2)%1!=0)
	}else if(operators[indiceO] == "%"){
		int1 = getRandomInt(20)
		int2 = getRandomArbitrary(1,20)
	}else{
		int1 = getRandomInt(20)
		int2 = getRandomInt(20)
	}


	document.getElementById('affichage').innerHTML = int1 + ' ' + operators[indiceO] + ' ' + int2;

	rightAnswer = eval(int1 + operators[indiceO] + int2)
	//console.log("Answer : " + rightAnswer)



		/*var skip = 0
		answerUser = false


		//while((answerUser != rightAnswer) && (skip != 1)){


			//var answerUser = prompt("Answer");
			//console.log(rightAnswer + " _ " + answerUser)
			//console.log("Before : " + skip)
			//console.log("After : " + skip)
			if(answerUser == "hint"){
				console.log("Answer : " + rightAnswer)
			}else if(answerUser == "skip"){
				skip = 1
				console.log("The answer was " + rightAnswer)
			}else if(answerUser == "stop"){
				skip = 1
				stop = 1
			}else if(answerUser == "skip"){
				console.log("New Calcul")
			}else if(answerUser != rightAnswer){
				console.log("Bad Answer")
			}else if(answerUser == rightAnswer){
				console.log("Good Answer")
			}
						stop = 0
						answerUser = false*/
}

let answerSkip = document.getElementById("affichage");
  
// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
answerSkip.addEventListener("mouseenter", function( event ) {   

	if(gamemode == "train"){
  		// on met l'accent sur la cible de mouseenter
  		event.target.innerHTML = rightAnswer
  		event.target.style.color = actualColorBtn;

  		// on réinitialise la couleur après quelques instants
  		setTimeout(function() {
  			event.target.innerHTML = int1 + ' ' + operators[indiceO] + ' ' + int2
    		event.target.style.color = "#ffffff";
  		}, 500);

	}else if(gamemode == "perso"){
  		// on met l'accent sur la cible de mouseenter
  		event.target.innerHTML = rightAnswer
  		event.target.style.color = actualColorBtn;

  		// on réinitialise la couleur après quelques instants
  		setTimeout(function() {
  			event.target.innerHTML = int1 + ' ' + operatorsTab[indiceTab] + ' ' + int2
    		event.target.style.color = "#ffffff";
  		}, 500);
	}else{
		console.log("Cheater!!!!!!")
	}
}, false);


function time(operators){
	//setDisplay("skip","none")
	setDisplay("timer","block")
	setDisplay("score","block")
	setDisplay("affichage","block");
	setDisplay("reponse","block");
	document.getElementById("score").innerHTML = "Score : " + score;


	

	setDisplay("rect","block")

	indiceO = getRandomInt(indice)

	if(operators[indiceO] == "/"){

		do{
			int1 = getRandomArbitrary(1,10)
			int2 = getRandomInt(10)
		}while(eval(int1 + operators[indiceO] + int2)%1!=0)
	}else if(operators[indiceO] == "%"){
		int1 = getRandomInt(10)
		int2 = getRandomArbitrary(1,10)
	}else{
		int1 = getRandomInt(10)
		int2 = getRandomInt(10)
	}

	document.getElementById('affichage').innerHTML = int1 + ' ' + operators[indiceO] + ' ' + int2;

	rightAnswer = eval(int1 + operators[indiceO] + int2)

}

answerBtn.addEventListener('click', (e) => {
	if(gamemode=="train"){
		answerUser = document.getElementById("result").value
		console.log("result : " + rightAnswer)
		document.getElementById('result').value = ""
		if(answerUser==rightAnswer){
			console.log("Bravo")
			//document.getElementById('result').value = ""
			train(operators)
		}else{
			console.log("Faux")
		}
	}
	else if(gamemode=="time"){
		answerUser = document.getElementById("result").value
		console.log("result : " + rightAnswer)
		document.getElementById('result').value = ""
		if(answerUser==rightAnswer){
			score += 1
			document.getElementById("score").innerHTML = "Score : " + score;
			console.log("Bravo")
			//document.getElementById('result').value = ""
			time(operators)
		}else{
			console.log("Faux")
		}
	}
	else if(gamemode=="perso"){
		answerUser = document.getElementById("result").value
		console.log("result : " + rightAnswer)
		document.getElementById('result').value = ""
		if(answerUser==rightAnswer){
			console.log("Bravo")
			//document.getElementById('result').value = ""
			perso(operatorsTab)
		}else{
			console.log("Faux")
		}
	}		
});



function lobby(){

	setDisplay("train", "none")
	setDisplay("time", "none")
	setDisplay("params-container","block")
	setDisplay("rect","none")

}


function creation(){

	setDisplay("params-container","none")

	var inputElements = document.getElementsByName('checkbox');
	for(var i=0; inputElements[i]; ++i){
		if(inputElements[i].checked){
		  	operatorsTab.push(inputElements[i].value)
		   		//checkedValue = inputElements[i].value;
		}
	}

	size = operatorsTab.length
	if(size!=0){
		perso(operatorsTab)
	}else{
		console.log("Make a choose pls")
		lobby()
	}//perso(operatorsTab)

}

function perso(operatorsTab){


	/*if(operatorsTab.length==0){
		creation()
	}*/

	
	
	/*for (var i = 0; i < operatorsTab.length; i++) {
		console.log(operatorsTab[i])
	}*/
	setDisplay("affichage","block");
	setDisplay("reponse","block");
	setDisplay("rect","block")
	setBG("answer","#a1a1a1")
	setColor("answer","#ffffff")

	setDisplay("timer","none")
	setDisplay("score","none")

	indiceTab = getRandomInt(size)

	if(operatorsTab[indiceTab] == "/"){

		do{
			int1 = getRandomArbitrary(1,20)
			int2 = getRandomInt(20)
		}while(eval(int1 + operatorsTab[indiceTab] + int2)%1!=0)
	}else if(operatorsTab[indiceTab] == "%"){
		int1 = getRandomInt(20)
		int2 = getRandomArbitrary(1,20)
	}else{
		int1 = getRandomInt(20)
		int2 = getRandomInt(20)
	}


	document.getElementById('affichage').innerHTML = int1 + ' ' + operatorsTab[indiceTab] + ' ' + int2;

	rightAnswer = eval(int1 + operatorsTab[indiceTab] + int2)


}





function getRandomInt(max) {
  return Math.round(Math.floor(Math.random() * Math.floor(max)));
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


function setBG(id,color){
	document.getElementById(id).style.background = color;
}

function setColor(id,color){
	document.getElementById(id).style.color = color;
}

function setDisplay(id,state){
	document.getElementById(id).style.display = state;
}

function setFontSize(id,size){
	document.getElementById("answer").style.fontSize = size;
}



/*--------------TITLE--------------*/

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

/*words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);*/


/*--------------TIMER--------------*/
function countdown(time){
	if(time>0){
		document.getElementById("timer").innerHTML = time;
		stopCountdown = setTimeout(function(){
     		time--;
      		countdown(time);
    	}, 1000);
	}else{
		document.getElementById("timer").innerHTML = "0";
		switch (difficulty) {
	  		case 'easy':
	    		leaderboard.setItem('BestScoreEasy', score);
	    		break;
	  		case 'intermediate':
	 	    	leaderboard.setItem('BestScoreIntermediate', score);
	    		break;
	  		case 'hard':
	    		leaderboard.setItem('BestScoreHard', score);
	    		break;
	  		case 'veryhard':
	    		leaderboard.setItem('BestScoreVeryhard', score);
	    		break;

	    }
	    getLeaderboard();

		setDisplay("timer","none");
		setDisplay("affichage","none");
		setDisplay("reponse","none");

	}
}



function getLeaderboard(){
	resultEasy = leaderboard.getItem('BestScoreEasy');
	resultIntermediate = leaderboard.getItem('BestScoreIntermediate');
	resultHard = leaderboard.getItem('BestScoreHard');
	resultVeryHard = leaderboard.getItem('BestScoreVeryhard');

	if(resultEasy!=null || resultIntermediate!=null || resultHard!=null || resultVeryHard!=null )
	document.getElementsByClassName("leaderboard")[0].innerHTML = "Best Results : <br>";
	if(resultEasy!=null) console.log("Easy : " + leaderboard.getItem('BestScoreEasy')), document.getElementsByClassName("leaderboard")[0].innerHTML += "<br> Easy : "+leaderboard.getItem('BestScoreEasy');
	if(resultIntermediate!=null) console.log("Intermediate : " + leaderboard.getItem('BestScoreIntermediate')), document.getElementsByClassName("leaderboard")[0].innerHTML += "<br> Intermediate : "+leaderboard.getItem('BestScoreIntermediate');
	if(resultHard!=null) console.log("Hard : " + leaderboard.getItem('BestScoreHard')), document.getElementsByClassName("leaderboard")[0].innerHTML += "<br> Hard : "+leaderboard.getItem('BestScoreHard');
	if(resultVeryHard!=null) console.log("Veryhard : " + leaderboard.getItem('BestScoreVeryhard')), document.getElementsByClassName("leaderboard")[0].innerHTML += "<br> Veryhard : "+leaderboard.getItem('BestScoreVeryhard');
}


/*--------------SCORE--------------*/







/*--------------LEADERBOARD--------------*/

leaderboard = localStorage;

