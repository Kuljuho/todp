function playRound(playerSelection, computerSelection) {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
}

function game() {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));