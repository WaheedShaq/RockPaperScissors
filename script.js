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

console.log(getComputerChoice());

function getPlayerChoice(input) {
  let choice = prompt('What is your choice?', input);
  return choice;
}

console.log(getPlayerChoice());

function playRound(getComputerChoice, getPlayerChoice) {
  let result = '';

  if (getComputerChoice === getPlayerChoice) {
    result = 'Tie!';
  } else if (getComputerChoice === 'rock' && getPlayerChoice === 'paper') {
    result = 'Player wins!';
  } else if (getComputerChoice === 'scissors' && getPlayerChoice === 'rock') {
    result = 'Player wins!';
  } else if (getComputerChoice === 'paper' && playerChoice === 'scissors') {
    result = 'Player wins!';
  } else if (getPlayerChoice === 'rock' && getComputerChoice === 'paper') {
    result = 'Computer wins!';
  } else if (getPlayerChoice === 'paper' && getComputerChoice === 'scissors') {
    result = 'Computer wins!';
  } else if (getPlayerChoice === 'scissors' && getComputerChoice === 'rock') {
    result = 'Computer wins!';
  }
  return console.log(result);
}

console.log(playRound(getComputerChoice(), getPlayerChoice()));
