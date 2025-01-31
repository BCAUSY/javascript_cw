const buttonContainer = document.getElementById("button-container");
const buttonRound = document.getElementById("buttonRound");
const buttonGame = document.getElementById("buttonGame");

const scoreContainer = document.querySelector("#score-container");
const computerScoreText = document.getElementById("computerScoreText");
const humanScoreText = document.getElementById("humanScoreText");

const tools = document.getElementById("tools");
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");

const text = document.getElementById("text");
const choice = ["ROCK", "PAPER", "SCISSORS"];

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";

const menu = [
  {
    name: "main menu",
    "button text": ["ROUND", "GAME"],
    "button functions": [playRound, playGame],
    text: "START A NEW GAME",
  },
  {
    name: "game menu",
    "button text": ["RESTART", "RESTART"],
    "button functions": [restart, restart],
    text: "FIGHT!",
  },
];
// PLAYER CHOICE BUTTONS
function getHumanChoice(choice) {
  humanSelection = choice;
  console.log(`Human chose: ${choice}`);
  return humanSelection;
}


// PLAYER CHOICE EVENT LISTENERS
buttonRock.addEventListener("click", () => {
  getHumanChoice("ROCK");
  getComputerChoice()
});

buttonPaper.addEventListener("click", () => {
  getHumanChoice("PAPER");
  getComputerChoice();
});
buttonScissors.addEventListener("click", () => {
  getHumanChoice("SCISSORS");
  getComputerChoice();
});

//COMPUTER CHOICE FUNCTION

function getComputerChoice() {
  computerSelection = choice[Math.floor(Math.random() * 3)];
  console.log(`Computer chose: ${computerSelection}`);
  return computerSelection;
}
computerSelection = getComputerChoice();

///

function toGameMenu(menu) {
  tools.style.display = "block";
  scoreContainer.style.display = "block";
  text.innerText = menu[1].text;
  buttonRound.innerText = menu[1]["button text"][1];
  buttonGame.innerText = menu[1]["button text"][0];
}


function toMainMenu(menu) {
  tools.style.display = "block";
  scoreContainer.style.display = "block";
  text.innerText = menu[0].text;
  buttonContainer.style.display = "none";
}


console.log(humanSelection);
console.log(computerSelection);

// ROUND BUTTON EVENT LISTENER
buttonRound.addEventListener("click", () => {
     toGameMenu(menu);
  if (humanSelection === "") {
    console.log("Please make a choice first!");
    return;
  }
  playRound(humanSelection, computerSelection);
});

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("ITS A TIE");
  } else {
    console.log("nobody wins");
}
}


buttonRound.onclick = playRound;
function playGame() {}
function restart() {
     toMainMenu()
}
// ROUND FUNCTION

/* function playRound(humanChoice, computerChoice){ */

/* playRound(humanSelection, computerSelection); */

/* console.log(computerSelection +"\n" + humanSelection);) */
