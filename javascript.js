const buttonRound = document.getElementById("buttonRound");
const buttonGame = document.getElementById("buttonGame");

const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");
const choice = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";



// PLAYER CHOICE BUTTONS

function getHumanChoice(choice){
     humanSelection = choice;
     console.log(choice);  
     return humanSelection;   
};

// PLAYER CHOICE EVENT LISTENERS
buttonRock.addEventListener("click", () => {
    getHumanChoice("ROCK");
});

buttonPaper.addEventListener("click", () => {
     getHumanChoice("PAPER");
})
buttonScissors.addEventListener("click", () => {
     getHumanChoice("SCISSORS");
})



//COMPUTER CHOICE FUNCTION 

function getComputerChoice(){
     return choice[(Math.floor(Math.random() * 3))];
};
const computerSelection = getComputerChoice();



console.log(humanSelection);
console.log(computerSelection);

// ROUND BUTTON EVENT LISTENER
buttonRound.addEventListener("click", () => {
     if (humanSelection === "") {
         console.log("Please make a choice first!");
         return; 
     }
 
     const computerSelection = getComputerChoice(); 
     console.log("Computer chose: " + computerSelection);
 
     playRound(humanSelection, computerSelection); 
 });



function playRound(humanSelection, computerSelection){
     if (humanSelection === computerSelection){
          console.log("ITS A TIE");
     } else {
          console.log("nobody wins");
     }
};
buttonRound.onclick = playRound;

// ROUND FUNCTION 

/* function playRound(humanChoice, computerChoice){ */


/* playRound(humanSelection, computerSelection); */

 
/* console.log(computerSelection +"\n" + humanSelection);) */