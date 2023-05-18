//Randomly chooses between 3 values and returns one
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

//calls gets user inputs and returs it in lower case for accurate comparasion
function getUserInput(){
let userInput = prompt("Choose your weapon!");
if(userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors"){
    alert(`your choice is ${userInput}`);
    return userInput.toLowerCase();
} else {
    alert("Wrong weapon!");
}
}

//checking to make sure inputs arre correctly taken
let playerSelection = getUserInput();
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);


function playGame(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === computerSelection){
        /*let tie = "Nobody wins its a tie!"
        userScore++;
        computerScore++
        console.log(userScore);
        console.log(computerScore);*/
        return null ;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        /*let winCase1 = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        console.log(userScore);*/
        return true;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        /*let winCase2 = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        console.log(userScore);*/
        return true;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        /*let winCase3 = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        console.log(userScore);*/
        return true;
    } else {
        let lose = `Sorry you lose! ${computerSelection} beats ${playerSelection}`;
        /*computerScore++;
        console.log(computerScore);*/
        return false;
    }
    

    
}

//there needs to be 5 rounds in total
//there has to be 2 scores kept in check and if it is a tie then adding it to each score
//at the beginning of each round a new input needs to be made
function game(){
   let userScore = 0;
   let computerScore = 0;
   if (playGame(playerSelection,computerSelection) ===  true){
    userScore++;
    console.log(userScore);
    console.log(computerScore);
    console.log(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
   } else if (playGame(playerSelection,computerSelection) === false){
    computerScore++;
    console.log(computerScore);
    console.log(userScore);
    console.log(`Sorry you lose! ${computerSelection} beats ${playerSelection}`);
   } else {
    console.log(userScore);
    console.log(computerScore);
    console.log("Nobody wins its a tie!");
   }
    
}
