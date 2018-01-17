const beatenBy = {
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3); 
  let choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
  }

  return choice[randomChoice];
}

function playerPlay() {
  let playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
  return playerSelection;
}

function playRound() {
  let computerChoice = computerPlay();
  let playerChoice = playerPlay();

  console.log(playerChoice);
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === beatenBy[computerChoice]) {
    return "Player wins!";
  } else {
    return "Computer wins!"
  }
}

console.log(playRound());