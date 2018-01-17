function computerPlay() {
  let randomizer = Math.floor(Math.random() * 3); 
  let choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
  }

  return choice[randomizer];
}