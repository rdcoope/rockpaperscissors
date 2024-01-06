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


if (playerScore > computerScore){
    winner = 'Player'
}else if (computerScore > playerScore ){
    winner = 'Computer'
}else{
    winner = ""
    winnerUi.textContent = "It's a Tie, Keep Playing"
}
console.log(winner)


winnerUi.textContent = 'The winner is: ' + winner 



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
    /*
    if ( round = 'Player') {
        //playerScore ++
       }else if (round = 'Computer') {
       // computerScore ++
       }else {tieCount++}
    */
divPlayer.textContent = playerScore
divComputer.textContent = computerScore 
divTie.textContent = tieCount
//roundCount++
divRound.textContent = roundCount
//console.log(playerScore + computerScore + tieCount + roundCount)
}



const btn = document.querySelector('#playerChoose')
btn.addEventListener('click', (event) => {
    let target = event.target
    switch (target.id) {
        case ('Rock'): scoring(playRound('Rock',getComputerChoice()));
        break;
        case ('Paper'): scoring(playRound('Paper',getComputerChoice()));
        break;
        case ('Scissors'): scoring(playRound('Scissors',getComputerChoice()));
        break
    }
})

if ()
/*
const rockBtn = document.querySelector('#Rock')
rockBtn.addEventListener('click',() => {
    scoring(playRound('Rock', getComputerChoice()))
})
console.log(playerScore)
*/