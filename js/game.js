const BEATEN_BY = {
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}

let gameOver = false;

function letComputerPlay() {
  let randomNumber = Math.floor(Math.random() * 3); 
  let choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
  };
  return choice[randomNumber];
}

function doWeHaveWinner(winner) {
  if (winner.textContent == 5) {
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

function play(playerPlay, letComputerPlay) {
  if (!gameOver) {
    const computerPlay = letComputerPlay();
    // const playerChoice = playerPlay;

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

var playerChoice = document.querySelector('.player');
playerChoice.addEventListener('click', function(event) {
  let playerChoice = event.target.textContent;
  play(playerChoice, letComputerPlay);
});