const GAME_OVER = 5;
const BEATEN_BY = {
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}

let gameOver = false;


function letComputerPlay() {
  let choice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choice.length); 
  return choice[randomNumber];
}

function doWeHaveWinner(winner) {
  if (winner.textContent == GAME_OVER) {
    gameOver = true;
    const container = document.querySelector('body');
    const endOfGame = document.createElement('div');
    endOfGame.textContent = `The game is over! The winner is ${winner.parentElement.className}.`
    container.appendChild(endOfGame);
  }
}

function increaseScore(roundWinner) {
  const winner = document.querySelector(`.${roundWinner} span`);
  winner.textContent = +winner.textContent + 1;

  doWeHaveWinner(winner);
}

function play(playerPlay, computer) {
  if (!gameOver) {
    const computerPlay = computer();
   
    if (playerPlay === computerPlay) {
      console.log("It's a tie!");
    } 
    else if (playerPlay === BEATEN_BY[computerPlay]) {
      increaseScore('player');
    } 
    else {
      increaseScore('computer');    
    }
  }
}

var playerPlay = document.querySelector('.player');
playerPlay.addEventListener('click', function(event) {
  let player = event.target.textContent;
  play(player, letComputerPlay);
});