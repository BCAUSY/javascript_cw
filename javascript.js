
const computerScoreText = document.getElementById("computerScoreText");
const humanScoreText = document.getElementById("humanScoreText");
const playGame = document.getElementById("playGame")
const tools = document.getElementById("tools");
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");
let humanLast = document.getElementById("lastHuman");
let compLast = document.getElementById("lastComp");
const choice = ["ROCK", "PAPER", "SCISSORS"];

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";


// PLAYER CHOICE BUTTONS
function getHumanChoice(hchoice) {
  humanSelection = hchoice;
  console.log(`Human chose: ${humanSelection}`);
  return humanSelection;
}

// PLAYER CHOICE EVENT LISTENERS
buttonRock.addEventListener("click", () => {
  getHumanChoice("ROCK");
  getComputerChoice();
  playRound();
});

buttonPaper.addEventListener("click", () => {
  getHumanChoice("PAPER");
  getComputerChoice();
  triggerGame();
});
buttonScissors.addEventListener("click", () => {
  getHumanChoice("SCISSORS");
  getComputerChoice();
  triggerGame();
});

//COMPUTER CHOICE FUNCTION

function getComputerChoice() {
  computerSelection = choice[Math.floor(Math.random() * 3)];
  console.log(`Computer chose: ${computerSelection}`);
  return computerSelection;
}
computerSelection = getComputerChoice();

/// layout shift
function restart() {
  humanScore = 0;
  computerScore = 0;
  humanScoreText.innerText = "0";
  computerScoreText.innerText = "0";
}
playGame.addEventListener("click", () => {
  console.log("ggg");
  playGame.innerText = "RUN";
  playGame = restart();
})

console.log(humanSelection);
console.log(computerSelection);

function playRound() {
  if (humanSelection === computerSelection) {
    humanLast.innerHTML = humanSelection;
    compLast.innerHTML = computerSelection;
    console.log("ITS A TIE");
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    console.log("YOU WIN");
    humanLast.innerHTML = humanSelection;
    compLast.innerHTML = computerSelection;

    humanScore += 1;
    humanScoreText.innerText = humanScore;
    console.log(humanScore);
  } else {
    humanLast.innerHTML = humanSelection;
    compLast.innerHTML = computerSelection;
    computerScore += 1;
    computerScoreText.innerText = computerScore;
    console.log("COMPUTER WINS");
  }
  if (humanScore === 5) {
    alert("YOU WON THE GAME");
    restart();
  } else if (computerScore === 5) {
    alert("COMPUTER WON THE GAME");
    restart();
  }
}

function triggerGame() {
  playRound();
}


