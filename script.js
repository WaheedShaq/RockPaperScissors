let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let randomizeChoice = Math.floor(Math.random() * choices.length) + 1; // randomize rock paper and scissors

  if (randomizeChoice === 1) {
    return 'rock';
  } else if (randomizeChoice === 2) {
    return 'paper';
  } else if (randomizeChoice === 3) {
    return 'scissors';
  }
}

function getPlayerChoice() {
  let choice = prompt('What is your input ?'); // gets user input
  return choice;
}

function playRound(computerChoice, playerChoice) {
  let result;
  console.log(
    `Computer Choice is ${computerChoice} and Player Choice is ${playerChoice}`
  );
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    result = 'Computer wins!';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    result = 'Computer wins!';
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    result = 'Computer wins!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    result = 'Player wins!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    result = 'Player wins!';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    result = 'Player wins!';
  } else if (playerChoice === computerChoice) {
    result = 'it is a Tie';
  }
  console.log(result);
}
console.log(playRound(getComputerChoice(), getPlayerChoice()));

//   // PLAYER CHOICES
// } else if (getPlayerChoice === 'rock' && getComputerChoice === 'paper') {
//   result = 'Computer wins!';
// } else if (getPlayerChoice === 'paper' && getComputerChoice === 'scissors') {
//   result = 'Computer wins!';
// } else if (getPlayerChoice === 'scissors' && getComputerChoice === 'rock') {
//   result = 'Computer wins!';
// } else if (getPlayerChoice === 'rock' && getComputerChoice === 'scissors') {
//   result = 'Player wins!';
// } else if (getPlayerChoice === 'paper' && getComputerChoice === 'rock') {
//   result = 'Player wins!';
// } else if (getPlayerChoice === 'scissors' && getComputerChoice === 'paper') {
//   result = 'Player wins!';
// }
// //-----------------------------------------------------//

// // COMPUTER CHOICES
// else if (getComputerChoice === 'rock' && getPlayerChoice === 'paper') {
//   result = 'Player wins!';
// } else if (getComputerChoice === 'paper' && getPlayerChoice === 'scissors') {
//   result = 'Player wins!';
// } else if (getComputerChoice === 'scissors' && getPlayerChoice === 'rock') {
//   result = 'Player wins!';
// } else if (getComputerChoice === 'rock' && getPlayerChoice === 'scissors') {
//   result = 'Computer wins!';
// } else if (getComputerChoice === 'paper' && getPlayerChoice === 'rock') {
//   result = 'Computer wins!';
// } else if (getComputerChoice === 'scissors' && getPlayerChoice === 'paper') {
//   result = 'Computer wins!';
// }

// //-----------------------------------------------------//
