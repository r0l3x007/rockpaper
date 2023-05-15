//Randomly chooses between 3 values and returns one
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}


function playGame(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "Nobody wins its a tie!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return `Congratulations you win! ${playerSelection} beats ${computerSelection}` ;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Sorry you lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//testing the game
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playGame(playerSelection,computerSelection));
