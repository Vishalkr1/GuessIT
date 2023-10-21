'use strict';
let score = 20;
let highScore = 0;
let secretNumber = randomIntFromInterval(1, 20);

const msgElem = document.querySelector('.message');
const scoreElem = document.querySelector('.score');
const highScoreElem = document.querySelector('.highscore');
const bodyElem = document.querySelector('body');
const numberElem = document.querySelector('.number');
const guessElem = document.querySelector('.guess');
    
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', startNewGame);

document.querySelector('.guess').addEventListener('keypress', event=>{
    if(event.keyCode===13){
        checkNumber();
    }
})


function randomIntFromInterval(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function checkNumber(){
    const guess = document.querySelector('.guess').value;
    

    if(score===0){
        msgElem.textContent = "Game Over!! You lost it";
        bodyElem.style.backgroundColor = '#be2e2e';
        numberElem.textContent = secretNumber;
        numberElem.style.width = '30rem';
        return;
    }
    if(!guess){
        msgElem.textContent = "Please enter a valid input";
        return;
    }
    if(guess>20 || guess<1){
        msgElem.textContent = "Please enter a number in range [1,20]";
        return;
    }

    if(guess>secretNumber){
        score--;
        msgElem.textContent = "Guess is too high!!";
        scoreElem.textContent = score;
    }else if(guess < secretNumber){
        score--;
        msgElem.textContent = "Guess is too low!!";
        scoreElem.textContent = score;
    }else{
        highScore = Math.max(highScore, score);
        highScoreElem.textContent = highScore;
        msgElem.textContent = "Yayy!! Correct Guess.."
        numberElem.textContent = guess;
        numberElem.style.width = '30rem';
        bodyElem.style.backgroundColor = '#60b347';
        return;
    }
    guessElem.focus();
}

function startNewGame(){
    score = 20;
    secretNumber = randomIntFromInterval(1,20);
    scoreElem.textContent = score;
    msgElem.textContent = "Start guessing...";
    guessElem.value = '';
    guessElem.focus();
    numberElem.textContent = '?';
    bodyElem.style.backgroundColor = '#222';
}