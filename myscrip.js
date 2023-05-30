//Randomly chooses between 3 values and returns one
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

//checking to make sure inputs arre correctly taken
let playerSelection 
let computerSelection
let userScore = 0;
let computerScore = 0;
//console.log(computerSelection);
//console.log(playerSelection);


document.getElementById(`rock`).addEventListener(`click`, function(){
    playGame(`rock`, computerSelection);
});

document.getElementById(`scissors`).addEventListener(`click`, function(){
    playGame(`scissors`, computerSelection);
});

document.getElementById(`paper`).addEventListener(`click`, function(){
    playGame(`paper`, computerSelection);
});


const scores =  document.querySelector(`#score`);
//if(scores){
//scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
//}
const winners =  document.querySelector(`#winner`);
const finalWin =  document.querySelector(`#finalWinner`);

function playGame(playerSelection,computerSelection){
    //playerSelection = prompt("Choose your weapon!",''.toLowerCase());
    computerSelection = getComputerChoice().toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection === computerSelection){
        /*alert("Nobody wins its a tie!");
        console.log(`your score ${userScore}`);
        console.log(`computer score ${computerScore}`);*/
        winners.textContent = `Nobody wins its a tie`;
        scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
       // alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
        userScore++;
       // console.log(`your score ${userScore}`);
        //console.log(`computer score ${computerScore}`);
        winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        //alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
        userScore++;
       // console.log(`your score ${userScore}`);
        //console.log(`computer score ${computerScore}`);
        winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        //alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
        userScore++;
        //console.log(`your score ${userScore}`);
       // console.log(`computer score ${computerScore}`);
       winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
       scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
    } else {
       // alert(`Sorry you lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++;
       // console.log(`your score ${userScore}`);
       // console.log(`computer score ${computerScore}`);
       winners.textContent = `Sorry you lose! ${computerSelection} beats ${playerSelection}`;
       scores.textContent = `Your score is ${userScore} and the computers score is ${computerScore}`;
    }


    if (computerScore == 5 && computerScore > userScore){
        finalWin.textContent = `Sorry  the computer reached 5 first, you lose`;
    } else if  ( userScore == 5 &&  userScore > computerScore){
        finalWin.textContent = `Congratulations you reached 5 first, you win yeeey.`;
    }
}




//there needs to be 5 rounds in total
//there has to be 2 scores kept in check and if it is a tie then adding it to each score
//at the beginning of each round a new input needs to be made
/*function game(){
    let round = 0;

    while(round < 5){
        playGame(playerSelection,computerSelection);
        round++;
    }

   if(round == 5 && userScore > computerScore){
    console.log(`Congratulations you win`);
   } else if (round == 5 && userScore < computerScore){
    console.log(`Sorry you lose`);
   } else{
    console.log(`Oh wow it is actually a tie in the end impressive`)
   }

   return `The game has ended, in order to play again please refresh`;
}*/
