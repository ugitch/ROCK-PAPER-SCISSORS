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

function increaseScore(roundWinner) {
  const winner = document.querySelector(`.${roundWinner} span`);
  winner.textContent = +winner.textContent + 1;

  if (winner.textContent == 5) {
    const container = document.querySelector('body');
    const endOfGame = document.createElement('div');
    endOfGame.textContent = `The game is over! The winner is ${winner.parentElement.className}.`
    container.appendChild(endOfGame);
  }
}

function playRound(computerPlay, playerPlay) {
  const computerChoice = letComputerPlay();
  const playerChoice = playerPlay;

  console.log(playerChoice);
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } 
  else if (playerChoice === BEATEN_BY[computerChoice]) {
    increaseScore('player');
    console.log(capitalize(`${playerChoice} beats ${computerChoice}! You win!`));
  } 
  else {
    increaseScore('computer');
    console.log(capitalize(`${computerChoice} beats ${playerChoice}! You lose!`));
  }
}

var playerChoice = document.querySelector('.player');
playerChoice.addEventListener('click', function(event) {
  let playerChoice = event.target.textContent;
  playRound(letComputerPlay, playerChoice);
});