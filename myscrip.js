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



const choiceRock = document.getElementById(`rock`);
choiceRock.addEventListener(`click`, chooseRock)

const choiceScissors = document.getElementById(`scissors`);
choiceScissors.addEventListener(`click`, chooseScissors);

const choicePaper = document.getElementById(`paper`);
choicePaper.addEventListener(`click`, choosePaper);

document.getElementById(`kazumawon`).style.display = `none`;
document.getElementById(`kazumalost`).style.display = `none`;

//const choiceRock =  document.getElementById(`rock`, function ()
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
        document.getElementById(`kazumastart`).style.display = `none`;
        winners.textContent = `Nobody wins its a tie`;
        scores.textContent = `Your score is ${userScore} and mighty Kazumas  score is ${computerScore}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
       // alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
       document.getElementById(`kazumastart`).style.display = `none`;
        userScore++;
       // console.log(`your score ${userScore}`);
        //console.log(`computer score ${computerScore}`);
        winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        scores.textContent = `Your score is ${userScore} and mighty Kazumas score is ${computerScore}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        //alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
        document.getElementById(`kazumastart`).style.display = `none`;
        userScore++;
       // console.log(`your score ${userScore}`);
        //console.log(`computer score ${computerScore}`);
        winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
        scores.textContent = `Your score is ${userScore} and mighty Kazumas score is ${computerScore}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        //alert(`Congratulations you win! ${playerSelection} beats ${computerSelection}`);
        document.getElementById(`kazumastart`).style.display = `none`;
        userScore++;
        //console.log(`your score ${userScore}`);
       // console.log(`computer score ${computerScore}`);
       winners.textContent = `Congratulations you win! ${playerSelection} beats ${computerSelection}`;
       scores.textContent = `Your score is ${userScore} and mighty Kazumas score is ${computerScore}`;
    } else {
       // alert(`Sorry you lose! ${computerSelection} beats ${playerSelection}`)
       document.getElementById(`kazumastart`).style.display = `none`;
        computerScore++;
       // console.log(`your score ${userScore}`);
       // console.log(`computer score ${computerScore}`);
       winners.textContent = `Sorry you lose! ${computerSelection} beats ${playerSelection}`;
       scores.textContent = `Your score is ${userScore} and mighty Kazumas score is ${computerScore}`;
    }


    if (computerScore == 5 && computerScore > userScore){
        finalWin.textContent = `Hah I won there was no doubt about it, now stealu!`;
        document.getElementById(`kazumawon`).style.display = `contents`;
        choiceRock.removeEventListener(`click`, chooseRock);
        choiceScissors.removeEventListener(`click`,chooseScissors);
        choicePaper.removeEventListener(`click`,choosePaper);

    } else if  ( userScore == 5 &&  userScore > computerScore){
        finalWin.textContent = `Impossible I never lose I never loseeeee, useless Aqua is at fault here for sure. Yameteeee.`;
        document.getElementById(`kazumalost`).style.display = `contents`;
        choiceRock.removeEventListener(`click`, chooseRock);
        choiceScissors.removeEventListener(`click`,chooseScissors);
        choicePaper.removeEventListener(`click`,choosePaper);
    }

}


function chooseRock(){
    playGame(`rock`,computerSelection);
}

function choosePaper(){
    playGame(`paper`, computerSelection);
}

function chooseScissors(){
    playGame(`scissors`, computerSelection);
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
