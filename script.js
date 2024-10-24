'use strict';

/// selectiong elements ////
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let playing = true; 
let currentScore = 0;
let activePlayer = 0;
const scores = [ 0,0]
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};



btnRoll.addEventListener('click', function() {
    if (playing){
    ///1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    ///2. display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    ///3. Check for a roll 1, true switch to next player
if (dice !== 1){
//add to score
currentScore = currentScore + dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
switchPlayer();
}
}});

btnHold.addEventListener('click', function(){
    if(playing){
    //1.Add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2.Check if playes score is 100
    if (scores[activePlayer] >= 20 ) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
        diceEL.classList.add('hidden');

    } else {
        switchPlayer();
    }
    //3. finish the game
    //4. if not switch to next player
    
}})


btnNew.addEventListener('click', function(){
playing = true;
score0EL.textContent = 0;
score1EL.textContent = 0;
current0EL.textContent = 0;
current1EL.textContent = 0;
player0EL.classList.remove('player--winner');
player1EL.classList.remove('player--winner');
player0EL.classList.add('player--active');
player1EL.classList.remove('player--active');
scores = [ 0,0];
activePlayer = 0;
currentScore = 0;

});