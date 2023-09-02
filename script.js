// let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomizeChoice = Math.floor(Math.random() * choices.length) + 1;
  let computerRoundChoice = document.querySelector('#computer-choice-text');

  if (randomizeChoice === 1) {
    computerRoundChoice.textContent = 'rock';
    return 'rock';
  } else if (randomizeChoice === 2) {
    computerRoundChoice.textContent = 'paper';
    return 'paper';
  } else if (randomizeChoice === 3) {
    computerRoundChoice.textContent = 'scissors';
    return 'scissors';
  }
}

let result;
function playRound(computerChoice, playerChoose) {
  roundNumber++;
  console.log(
    `Computer Choice is ${computerChoice} and Player Choice is ${playerChoose}`
  );
  if (playerChoose === 'rock' && computerChoice === 'paper') {
    result = 'Computer wins!';
    computerScore++;
  } else if (playerChoose === 'paper' && computerChoice === 'scissors') {
    result = 'Computer wins!';
    computerScore++;
  } else if (playerChoose === 'scissors' && computerChoice === 'rock') {
    result = 'Computer wins!';
    computerScore++;
  } else if (playerChoose === 'rock' && computerChoice === 'scissors') {
    result = 'Player wins!';
    playerScore++;
  } else if (playerChoose === 'paper' && computerChoice === 'rock') {
    result = 'Player wins!';
    playerScore++;
  } else if (playerChoose === 'scissors' && computerChoice === 'paper') {
    result = 'Player wins!';
    playerScore++;
  } else if (playerChoose === computerChoice) {
    result = "It's a tie!";
  }
  console.log(
    `Player score is ${playerScore} and computer score is ${computerScore}`
  );
  playerScoreDOM.textContent = playerScore;
  computerScoreDOM.textContent = computerScore;

  let chooseHeader = document.querySelector('.choose-header');

  if (roundNumber === 5 && playerScore === 5) {
    chooseHeader.textContent = 'Player Won!';
    playerScoreDOM.textContent = 0;
    computerScoreDOM.textContent = 0;
    roundNumber = 0;
    playAgainBtn.style.display = 'block';
  } else if (roundNumber === 5 && computerScore === 5) {
    chooseHeader.textContent = 'Computer Won!';
    playerScoreDOM.textContent = 0;
    computerScoreDOM.textContent = 0;
    roundNumber = 0;
    playAgainBtn.style.display = 'block';
  } else if (roundNumber === 5 && computerScore === 5)
    roundNumberDOM.textContent = roundNumber;
  console.log(roundNumber);
}

let playerChoose = '';

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

let playAgainBtn = document.querySelector('#play-again-btn');

let rockBtn = document.querySelector('.rock-btn');
let paperBtn = document.querySelector('.paper-btn');
let scissorsBtn = document.querySelector('.scissors-btn');

let playerRoundChoice = document.querySelector('#player-choice-text');

let playerScoreDOM = document.querySelector('#player-round');
let computerScoreDOM = document.querySelector('#computer-round');
let roundNumberDOM = document.querySelector('#round-number-DOM');

rockBtn.addEventListener('click', playerChooseRock);
paperBtn.addEventListener('click', playerChoosePaper);
scissorsBtn.addEventListener('click', playerChooseScissors);

function playerChooseRock() {
  if (rockBtn) {
    playerChoose = 'rock';
    playerRoundChoice.textContent = playerChoose;
    playRound(getComputerChoice(), playerChoose);

    // if (result === 'Computer wins!') {
    //   computerScore += 1;

    //   console.log(`Computer score is: ${computerScore}`);
    // } else if (result === 'Player wins!') {
    //   playerScore += 1;
    //   console.log(`Player score is: ${playerScore}`);
    // } else if (result === "It's a tie!") {
    //   playerScore += 1;
    //   computerScore += 1;
    //   console.log(
    //     `It's a tie so player score is ${playerScore} and computer score is ${computerScore}`
    //   );
    // }
  }
}

function playerChoosePaper() {
  if (paperBtn) {
    playerChoose = 'paper';
    playerRoundChoice.textContent = playerChoose;

    playRound(getComputerChoice(), playerChoose);
    // if (result === 'Computer wins!') {
    //   computerScore += 1;
    //   console.log(`Computer score is: ${computerScore}`);
    // } else if (result === 'Player wins!') {
    //   playerScore += 1;
    //   console.log(`Player score is: ${playerScore}`);
    // } else if (result === "It's a tie!") {
    //   playerScore += 1;
    //   computerScore += 1;
    //   console.log(
    //     `It's a tie so player score is ${playerScore} and computer score is ${computerScore}`
    //   );
    // }
  }
}

function playerChooseScissors() {
  if (scissorsBtn) {
    playerChoose = 'scissors';
    playerRoundChoice.textContent = playerChoose;
    playRound(getComputerChoice(), playerChoose);

    // if (result === 'Computer wins!') {
    //   computerScore += 1;
    //   console.log(`Computer score is: ${computerScore}`);
    // } else if (result === 'Player wins!') {
    //   playerScore += 1;
    //   console.log(`Player score is: ${playerScore}`);
    // } else if (result === "It's a tie!") {
    //   playerScore += 1;
    //   computerScore += 1;
    //   console.log(
    //     `It's a tie so player score is ${playerScore} and computer score is ${computerScore}`
    //   );
    // }
  }
}
