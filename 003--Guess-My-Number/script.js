'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
document.querySelector('.number').value = secretNumber;

let score = 100; // a state variable

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No number!');
        return;
    }
    if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score -= 10;
        if (score <= 0) {
            displayScore(0);
            displayMessage('You lost the game!');
            return;
        }
        displayScore(score);
        return;
    }
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    score = 100;
    displayScore(score);
});


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (message) {
    document.querySelector('.score').textContent = message;
}