const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
// const buttons = document.querySelector('.buttons');
const h1 = document.querySelector('h1');

const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');

let playerScore = 0;
let computerScore = 0;


const myArray = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() {
    return myArray[~~(Math.random()*myArray.length)]
}


function playRound(){
    rockButton.addEventListener('click', function (e){
        const computerSelection = computerPlay();
        if (computerSelection == 'scissors') {
            h1.innerText = "YOU WIN! (computer chose scissors)";
            playerDisplay.innerText = playerScore += 1;
        } else if (computerSelection == 'paper') {
            h1.innerText = "YOU LOSE! (computer chose paper)";
            computerDisplay.innerText = computerScore +=1;
        } else if (computerSelection == 'rock') {
            h1.innerText = "DRAW! (computer chose rock)";
        }
        setTimeout(function(){
            h1.innerText = "Play Again!"

        }, 1000);
    })     

    paperButton.addEventListener('click', function (e){
        const computerSelection = computerPlay();
        if (computerSelection == 'scissors') {
            h1.innerText = "YOU LOSE! (computer chose scissors)";
            computerDisplay.innerText = computerScore +=1;
        } else if (computerSelection == 'paper') {
            h1.innerText = "DRAW! (computer chose paper)";
        } else if (computerSelection == 'rock') {
            h1.innerText = "YOU WIN! (computer chose rock)";
            playerDisplay.innerText = playerScore += 1;
        }
        setTimeout(function(){
            h1.innerText = "Play Again!"

        }, 1000);
    })

    scissorsButton.addEventListener('click', function (e){
        const computerSelection = computerPlay();
        if (computerSelection == 'scissors') {
            h1.innerText = "DRAW! (computer chose scissors)";
        } else if (computerSelection == 'paper') {
            h1.innerText = "YOU WIN! (computer chose paper)";
            playerDisplay.innerText = playerScore += 1;
        } else if (computerSelection == 'rock') {
            h1.innerText = "YOU LOSE! (computer chose rock)";
            computerDisplay.innerText = computerScore +=1;
        }
        setTimeout(function(){
            h1.innerText = "Play Again!"

        }, 1000);
    })
    
}

playRound();







