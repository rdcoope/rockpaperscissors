let computer;
let playerScore = 0, computerScore = 0, roundCount = 0, roundWinner, tieCount = 0;

console.log('playerScore: ' + playerScore);
console.log('computerScore: ' + computerScore);
console.log('Round count: ' + roundCount);

computer = getComputerChoice();
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch (number){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
    
}
console.log('ComputerChoice: ' + getComputerChoice())

function isGameOver(){
    playerScore === 5 || computerScore === 5
}
console.log('Is the game over? ' + isGameOver());

let computerChoice = getComputerChoice();
function playRound(playerChoice,computerChoice){
    let roundWinner = ""
    if (playerChoice === computerChoice){roundWinner = 'Tie'
    tieCount ++ ;
}
    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')){
            playerScore ++
            roundWinner = "Player";
        
        };
    if (
        (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Rock') ||
        (playerChoice === 'Rock' && computerChoice === 'Paper')){
            computerScore ++ ;
            roundWinner = 'Computer';
        };
    roundCount ++;
    return roundWinner
}

// ******** UI ********* //
const  player = document.querySelector('#playerScore');
const computerUi = document.querySelector('#computerScore')
const tie = document.querySelector('#tie');
const roundUI = document.querySelector('#roundCount')
const winnerUi = document.querySelector('#roundPlay')
const reset = document.querySelector('#reset')

const divComputer = document.createElement("div")
const divPlayer = document.createElement('div')
const divTie = document.createElement('div')
const divRound = document.createElement('div')


divPlayer.setAttribute('class', 'number');
divPlayer.textContent = playerScore
player.appendChild(divPlayer);
console.log(player)

divComputer.setAttribute('class', 'number')
divComputer.textContent = computerScore
computerUi.appendChild(divComputer)
console.log(computerUi)

divTie.setAttribute('class', 'number')
divTie.textContent = tieCount
tie.appendChild(divTie)
console.log(tie)

divRound.setAttribute('class', 'number')
divRound.textContent = roundCount
roundUI.appendChild(divRound)
console.log(roundUI)

function scoring(round) {

divPlayer.textContent = playerScore
divComputer.textContent = computerScore 
divTie.textContent = tieCount
//roundCount++
divRound.textContent = roundCount
//console.log(playerScore + computerScore + tieCount + roundCount)
}



function gameEnd() {
        if (playerScore > computerScore){
            winner = 'Player'
        }else if (computerScore > playerScore ){
            winner = 'Computer'
        }else{
            winner = ""
            winnerUi.textContent = "It's a Tie, Keep Playing"
        }
    winnerUi.textContent = 'The winner is: ' + winner }
    
    
function display() {
    divPlayer.textContent = playerScore
    divComputer.textContent = computerScore
    divTie.textContent = tieCount
    divRound.textContent = roundCount
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5 || roundCount === 20
}

    const btn = document.querySelector('#playerChoose')
    btn.addEventListener('click', (event) => {
        if(!isGameOver()){
            let target = event.target
            let computer = getComputerChoice()
            switch (target.id) {
                case ('Rock'): scoring(playRound('Rock',computer));
                break;
                case ('Paper'): scoring(playRound('Paper',computer));
                break;
                case ('Scissors'): scoring(playRound('Scissors',computer));
                break;
            console.log(target.id)
            console.log(computer)
        }
    }else {gameEnd()} 
    })
    
    reset.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        tieCount = 0;
        roundCount = 0

        display()
        winnerUi.textContent = ''

    })
    



