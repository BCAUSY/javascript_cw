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
buttonRound.onclick = toGameMenu;

function restart() {
     text.innerText = menu[0].text;
     buttonGame.style.display = "block";
     tools.style.display = "none";     
     scoreContainer.style.display = "none";
     buttonContainer.style.justifyContent = "space-around"
     buttonRound.onclick = toGameMenu;
}

function toGameMenu(menu) {
     buttonGame.style.display = "none";
     buttonContainer.style.justifyContent = "center";
     tools.style.display = "flex";
     scoreContainer.style.display = "flex";
     text.innerText = "FIGHT!";
     buttonRound.onclick = restart;
}

/* buttonGame.addEventListener("click", () => {
  toMainMenu();
}); */
/* function toMainMenu(menu) {
     text.innerText = menu[0].text;
}
 */

console.log(humanSelection);
console.log(computerSelection);

/* // ROUND BUTTON EVENT LISTENER
buttonRound.addEventListener("click", () => {
     if (text.inner !== "FIGHT!"){
     toGameMenu(menu);
     } else {
          toMainMenu(menu);
     }
}); */

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("ITS A TIE");
  } else {
    console.log("nobody wins");
}
}


function playGame() {}

// ROUND FUNCTION

/* function playRound(humanChoice, computerChoice){ */

/* playRound(humanSelection, computerSelection); */

/* console.log(computerSelection +"\n" + humanSelection);) */
