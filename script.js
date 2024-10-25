'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')
const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold')
const current0Score = document.querySelector('#current--0');
const current1Score = document.querySelector('#current--1');

let score = 0;
let totalScore;
let activePlayer = 0
let playing = true

// hidding the diceImg image from the screen
diceImg.classList.add('hidden'); 

const initalization = () => {
  diceImg.classList.add('hidden'); 

  score = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = score;
  totalScore.textContent = Number(totalScore.textContent) * score;
  player0El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
  player1El.classList.remove('player--winner')
  
  activePlayer = 0;
  playing = true
}

const switchPlayer = () => { // switch player function 
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // changing visual effect color on the two players
  player1El.classList.toggle('player--active'); // changing visual effect color on the two players
}

btnRoll.addEventListener('click', function(){ // Adding scores before keeping it
  if (playing){

    
    const dice = Math.trunc(Math.random() * 6) + 1 ; // Generate random dice roll

    
    diceImg.classList.remove('hidden'); // display diceImg roll
    diceImg.setAttribute('src','dice-'+ dice + '.png'); // dices

    
    if(dice !== 1){ // is it 1 ? switch player : add dice roll current score
      score += dice 
      document.querySelector(`#current--${activePlayer}`).textContent = score
    }
    else{
      switchPlayer();
    }

  }
 
});

btnHold.addEventListener('click', function(){
  if (playing){

   
    totalScore = document.querySelector(`#score--${activePlayer}`);  // Adding current score to total score
    totalScore.textContent = Number(totalScore.textContent) + score

    
    if (Number(totalScore.textContent) >= 100){ // score >= 100 ? current player wins : switch palyer
      playing = false; // set playing false
      diceImg.classList.add('hidden'); // hide the dice
      
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); // adding color to the player won
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); // removing active color from the player won
    }
    else{
      switchPlayer();
    }
  }
  
});

// restart the game button events 
btnNew.addEventListener('click', initalization)




