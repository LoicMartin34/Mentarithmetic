const btnContainer = document.querySelector('#btn-container');

const blueBtn = document.querySelector('.blue-btn');
const blueLogo = document.querySelector('.blue-logo');

const greenBtn = document.querySelector('.green-btn');
const greenLogo = document.querySelector('.green-logo');

const yellowBtn = document.querySelector('.yellow-btn');
const yellowLogo = document.querySelector('.yellow-logo');

const redBtn = document.querySelector('.red-btn');
const redLogo = document.querySelector('.red-logo');

const iconArr = document.querySelectorAll('.icon');
const answerBtn = document.querySelector('.answerBtn');



var actualColor = "#64b5f6"
document.body.style.background = "#2196f3";


setDisplay("rect","none")
btnContainer.addEventListener('click', (e) => {
	if(e.target === blueBtn || e.target === blueLogo) {
		document.body.style.background = "#2196f3";
   		//changeBg('blue-bg', 'red-bg', 'yellow-bg', 'green-bg');
    	changeBtn(blueBtn, redBtn, yellowBtn, greenBtn);
    	changeIcon(0, 3, 2, 1);
    	chooseDifficulty('easy');
   	 	actualColor = "#2196f3";
  	}
  	if(e.target === greenBtn || e.target === greenLogo) {
  		document.body.style.background = "#4caf50";
    	//changeBg('green-bg', 'blue-bg', 'yellow-bg', 'red-bg');
    	changeBtn(greenBtn, blueBtn, yellowBtn, redBtn);
   		changeIcon(1, 0, 2, 3);
    	chooseDifficulty('intermediate');
    	actualColor = "#4caf50";
	}
  	if(e.target === yellowBtn || e.target === yellowLogo) {
  	  	document.body.style.background = "#ffb300";
    	//changeBg('yellow-bg', 'blue-bg', 'red-bg', 'green-bg');
   		changeBtn(yellowBtn, blueBtn, redBtn, greenBtn);
   		changeIcon(2, 0, 3, 1);
    	chooseDifficulty('hard');
    	actualColor = "#ffb300";
	}
  	if(e.target === redBtn  || e.target === redLogo) {
   		document.body.style.background = "#e53935";
    	//changeBg('red-bg', 'blue-bg', 'yellow-bg', 'green-bg');
    	changeBtn(redBtn, blueBtn, yellowBtn, greenBtn);
    	changeIcon(3, 0, 2, 1);
    	chooseDifficulty('veryhard');
    	  actualColor = "#e53935";
  	}

});

function changeBg(add, removeOne, removeTwo, removeThree) {
  btnContainer.classList.remove(removeOne);
  btnContainer.classList.remove(removeTwo);
  btnContainer.classList.remove(removeThree);
  btnContainer.classList.add(add);
}

function changeBtn(add, removeOne, removeTwo, removeThree) {
  add.classList.add('active');
  removeOne.classList.remove('active');
  removeTwo.classList.remove('active');
  removeThree.classList.remove('active');
}

function changeIcon(add, removeOne, removeTwo, removeThree) {
  iconArr[add].classList.add('active');
  iconArr[removeOne].classList.remove('active');
  iconArr[removeTwo].classList.remove('active');
  iconArr[removeThree].classList.remove('active');
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
//var stop = 0
var stopCountdown

function chooseDifficulty(d){
	clearTimeout(stopCountdown)
	setDisplay("timer","none")
	setDisplay("score","none")
	setDisplay("rect","none");
	setBG(gamemode,"#ffffff");
	setColor(gamemode,"#777");
	difficulty = d
	//document.getElementById('affichage').innerHTML = d;
}

function chooseGamemode(g){
	clearTimeout(stopCountdown)
	setDisplay("timer","none")
	setDisplay("score","none")
	setColor(gamemode,"#777");
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

	console.log("je suis ici : ")

	if(gamemode == "train"){
		train(operators)
	}else if (gamemode == "time"){
		countdown(10000)
		time(operators)
	}

}

answerBtn.addEventListener('click', (e) => {
	
});

function train(operators){
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


function time(operators){
	setDisplay("timer","block")
	setDisplay("score","block")
	document.getElementById("score").innerHTML = score;


	

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
	answerUser = document.getElementById("result").value
	console.log("result : " + rightAnswer)
	document.getElementById('result').value = ""
	if(answerUser==rightAnswer){
		score += 1
		document.getElementById("score").innerHTML = score;
		console.log("Bravo")
		document.getElementById('result').value = ""
		train(operators)
	}else{
		console.log("Faux")
	}
});







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
		setDisplay("rect","none");
	}
}




/*--------------SCORE--------------*/

