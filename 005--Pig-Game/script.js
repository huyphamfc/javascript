'use strict';


// SELECTING ELEMENTS
const dice = document.querySelector('.dice');

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const scoreBoard = document.querySelector('.score');
const scoreBoard_0 = document.querySelector('#score--0');
const scoreBoard_1 = document.querySelector('#score--1');

const currentScoreBoard = document.querySelector('.current-score');
const currentScoreBoard_0 = document.querySelector('#current--0');
const currentScoreBoard_2 = document.querySelector('#current--2');


// STARTING CONDITIONS
dice.classList.add('hidden');

scoreBoard_0.textContent = 0;
scoreBoard_1.textContent = 0;

let currentScore = 0;


// ROLLING DICE FUNCTIONALITY
rollDiceBtn.addEventListener('click', function () {
    // generating a random dice roll
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    // display dice roll
    dice.classList.remove('hidden');
    dice.src = `img/dice-${diceValue}.png`;

    // check for rolled 1
    if (diceValue !== 1) {
        // add dice to current score
        currentScore += diceValue;
    } else {
        // switch player
    }
})