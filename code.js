function playRound(playerSelection, computerSelection) {
    let options = ["option1", "option2", "option3"];
    let choice = options[Math.floor(Math.random()*options.length)];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));