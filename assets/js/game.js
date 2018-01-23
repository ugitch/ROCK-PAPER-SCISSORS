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

function doWeHaveWinner(winner) {
  if (winner.textContent == WIN_POINTS) {
    gameOver = true;
    const container = document.querySelector('body');
    const endOfGame = document.createElement('h2');
    endOfGame.textContent = `The game is over! The winner is ${winner.parentElement.id}.`
    container.appendChild(endOfGame);
  }
}

function increaseScore(roundWinner) {
  const winner = document.querySelector(`${roundWinner} .score`);
  winner.textContent = +winner.textContent + 1;

  doWeHaveWinner(winner);
}

function play(playerChoice, computer) {
  if (!gameOver) {
    const computerChoice = computer();

    console.log(`The player played ${playerChoice}!`);
    console.log(`The computer played ${computerChoice}!`);
   
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
      return;
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