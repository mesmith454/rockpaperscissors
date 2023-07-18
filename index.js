// console.log is functioning normally
// console.log("What's good fuckeroo!")
//randomNumber is returning a number from 1 to 3
//getComputerChoice is returning Rock paper or scissors based on random number

function startAGame() {
    //pops prompt to start game
    const startGame = confirm("Let's play rock, paper, scissors!")
    //take user input to start a game
    
}

function playGame() {
    //game action happens here
    //retrieves player choice
    //generates computer choice
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection(); 
    //determines winner and prints a message
}



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1){
        computerSelection = 'Rock'
    } else if (randomNumber === 2){
        computerSelection = 'Paper'
    } else {
        computerSelection = 'Scissors'
    }

    // return computerSelection   only returns paper?
}

function getPlayerSelection() {
    return prompt('Rock, Paper, or Scissors?')
}

function formatPlayerSelection(playerSelection) {
    //formats player selection to recognize any mix of upper lower case
}

function determineWinner () {

}

//startAGame(); <--begins game as app