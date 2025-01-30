const buttonRound = document.getElementById("buttonRound");
const buttonGame = document.getElementById("buttonGame");

const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");




// PLAYER CHOICE BUTTONS

function getHumanChoice(choice){
     console.log(`Human chose ${choice}`);
};
buttonRock.addEventListener("click", () => {
    getHumanChoice("ROCK");
});

buttonPaper.addEventListener("click", () => {
     getHumanChoice("PAPER");
})
buttonScissors.addEventListener("click", () => {
     getHumanChoice("Scissors");
})





const choice = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
     return choice[(Math.floor(Math.random() * 3))];
};


console.log(`Computer chose ${getComputerChoice()}`);
console.log(getHumanChoice())

/* // ROUND FUNCTION 

function playRound(humanChoice, computerChoice){
     console.log(humanChoice);
}

playRound(humanSelection, computerSelection);

const humanSelection = getHumanChoice();
const computerSelection + getComputerChoice();

console.log(computerSelection +"\n" + humanSelection);) */