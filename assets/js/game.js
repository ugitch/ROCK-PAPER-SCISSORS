const WIN_POINTS = 5;
const BEATEN_BY = {
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}
const CHOICE_OF_PLAY = ["rock", "paper", "scissors"];

let gameOver = false;


function letComputerPlay() {
  let randomNumber = Math.floor(Math.random() * CHOICE_OF_PLAY.length);
  return CHOICE_OF_PLAY[randomNumber];
}

function doWeHaveWinner(winnerScore) {
  if (winnerScore.textContent == WIN_POINTS) {
    gameOver = true;
    const container = document.querySelector('body');
    const endOfGame = document.createElement('h2');
    endOfGame.textContent = `The game is over! The winner is ${winnerScore.parentElement.id}.`
    container.appendChild(endOfGame);
  }
}

function increaseScore(roundWinner) {
  const winnerScore = document.querySelector(`${roundWinner} .score`);
  winnerScore.textContent = +winnerScore.textContent + 1;

  doWeHaveWinner(winnerScore);
}

function play(playerChoice, computer) {
  if (!gameOver) {
    const computerChoice = computer();

    console.log(`The player played ${playerChoice}!`);
    console.log(`The computer played ${computerChoice}!`);
   
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } 
    else if (playerChoice === BEATEN_BY[computerChoice]) {
      console.log(capitalize(`${playerChoice} beats ${computerChoice}!`));
      increaseScore('#player');
    } 
    else {
      console.log(capitalize(`${computerChoice} beats ${playerChoice}!`));
      increaseScore('#computer');    
    }
  }
}

var player = document.querySelector('#player');
player.addEventListener('click', function(event) {
  let playerChoice = event.target.id;
  play(playerChoice, letComputerPlay);
});