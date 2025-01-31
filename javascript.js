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
  getComputerChoice();
  triggerGame();
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
buttonRound.onclick = toGameMenu;
buttonGame.onclick = playGame;

function restart() {
     text.innerText = menu[0].text;
     buttonGame.style.display = "block";
     tools.style.display = "none";     
     scoreContainer.style.display = "none";
     buttonContainer.style.justifyContent = "space-around"
     buttonRound.onclick = toGameMenu;
     buttonRound.innerText = "PLAY ROUND";
     humanScore = 0;
     computerScore = 0;
     humanScoreText.innerText = "0";
     computerScoreText.innerText = "0";
}

function toGameMenu(menu) {
     buttonGame.style.display = "none";
     buttonContainer.style.justifyContent = "flex-end";
     tools.style.display = "flex";
     scoreContainer.style.display = "flex";
     text.innerText = "FIGHT!";
     buttonRound.innerText = "RUN";
     buttonRound.onclick = restart;
}

console.log(humanSelection);
console.log(computerSelection);



function playRound() {
  if (humanSelection === computerSelection) {
    console.log("ITS A TIE");
  } else if (humanSelection === "ROCK" && computerSelection === "SCISSORS" || humanSelection === "SCISSORS" && computerSelection === "PAPER" || humanSelection === "PAPER" && computerSelection === "ROCK"){
    console.log("YOU WIN");
    text.innerText = "POINT FOR YOU";
    alert("YOU WIN");
    humanScore+= 1;
    humanScoreText.innerText = humanScore;
    console.log(humanScore);
  } else {
    computerScore+= 1;
    text.innerText = "COMPUTER GETS A POINT";
    computerScoreText.innerText = computerScore;
    console.log("COMPUTER WINS");
  } if (humanScore === 5){
    alert("YOU WON THE GAME");
    restart();
  } else if (computerScore === 5) {
    alert("COMPUTER WON THE GAME");
    restart();
  }
  }


function triggerGame(){
  playRound();
};

function playGame() {
  toGameMenu();
  console.log("elo");
};

// ROUND FUNCTION

/* function playRound(humanChoice, computerChoice){ */

/* playRound(humanSelection, computerSelection); */

/* console.log(computerSelection +"\n" + humanSelection);) */
