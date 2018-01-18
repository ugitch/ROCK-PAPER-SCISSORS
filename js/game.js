const APPROVED_CHOICES = ['rock', 'paper', 'scissors'];
const BEATEN_BY = {
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}

let playerWins = 0;
let computerWins = 0;
let gameOver = false;

function letComputerPlay() {
  let randomNumber = Math.floor(Math.random() * 3); 
  let choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
  }
  return choice[randomNumber];
}

function letPlayerPlay() {
  let playerSelection = prompt("Rock, paper, scissors?");

  if (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
  }

  if (APPROVED_CHOICES.indexOf(playerSelection) !== -1) {
    return playerSelection;
  }
  else {
    console.log("Wrong entry!");
    playerSelection = letPlayerPlay();
    return playerSelection;
  }
}

function playRound(computerPlay, playerPlay) {
  const computerChoice = computerPlay();
  const playerChoice = playerPlay();

  console.log(playerChoice);
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } 
  else if (playerChoice === BEATEN_BY[computerChoice]) {
    playerWins++;
    console.log(capitalize(`${playerChoice} beats ${computerChoice}! You win!`));
  } 
  else {
    computerWins++
    console.log(capitalize(`${computerChoice} beats ${playerChoice}! You lose!`));
  }
}

function playGame() {
  let winner = undefined;

  while (!gameOver) {
    playRound(letComputerPlay, letPlayerPlay);

    if (playerWins === 5) {
      winner = "player";
      gameOver = true;
    } 
    else if (computerWins === 5) {
      winner = "computer";
      gameOver = true;
    } 
    else {
      console.log(`Current result:\n\tcomputer: ${computerWins}\n\tplayer: ${playerWins}`);
    }
  }
  console.log(`The winner is ${winner}!`)
}

playGame();
