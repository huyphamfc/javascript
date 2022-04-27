'use strict';


// SELECTING ELEMENTS
const dice = document.querySelector('.dice');

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

const scoreBoard = document.querySelector('.score');
const scoreBoard_0 = document.querySelector('#score--0');
const scoreBoard_1 = document.querySelector('#score--1');

const currentScoreBoard = document.querySelector('.current-score');
const currentScoreBoard_0 = document.querySelector('#current--0');
const currentScoreBoard_1 = document.querySelector('#current--1');


// STARTING CONDITIONS
dice.classList.add('hidden');

scoreBoard_0.textContent = 0;
scoreBoard_1.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let playing = true;


// ROLLING DICE FUNCTIONALITY
rollDiceBtn.addEventListener('click', function () {
    if (playing) {
        // generating a random dice roll
        const diceValue = Math.trunc(Math.random() * 6) + 1;

        // display dice roll
        dice.classList.remove('hidden');
        dice.src = `img/dice-${diceValue}.png`;

        // check for rolled 1
        if (diceValue !== 1) {
            // add dice to current score
            currentScore += diceValue;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch player        
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player_0.classList.toggle('player--active');
            player_1.classList.toggle('player--active');
        }
    }
})


// HOLDING CURRENT SCORE FUNCTIONALITY
holdBtn.addEventListener('click', function () {
    if (playing && !dice.classList.contains('hidden')) {
        // add current score to the active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // check score
        if (scores[activePlayer] >= 10) {
            // finish the game
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            return;
        }

        // switch player        
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player_0.classList.toggle('player--active');
        player_1.classList.toggle('player--active');
    }
})


// Reset Game
newGameBtn.addEventListener('click', function () {
    dice.classList.add('hidden');
    scoreBoard_0.textContent = 0;
    scoreBoard_1.textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scoreBoard_0.textContent = 0;
    scoreBoard_1.textContent = 0;
    currentScoreBoard_0.textContent = 0;
    currentScoreBoard_1.textContent = 0;
    player_0.classList.remove('player--winner');
    player_1.classList.remove('player--winner');
    player_0.classList.add('player--active');
    player_1.classList.remove('player--active');
})