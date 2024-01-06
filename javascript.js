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
    if (playerChoice === computerChoice){roundWinner = 'Tie'
    tieCount ++ ;
}
    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')){
            playerScore ++ };
    if (
        (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Rock') ||
        (playerChoice === 'Rock' && computerChoice === 'Paper')){
            computerScore ++ };
    roundCount ++;
}
const btn = document.querySelector('#playerChoose');
btn.addEventListener('click',function getPlayerChoice(event)  {
    let target = event.target
    let playerChoice
    switch (target.id){
        case ('Rock'): playerChoice = 'Rock';
        case ('Paper'): playerChoice = 'Paper';
        case ('Scissors'): playerChoice ='Scissors';
    }
    
})

    // ******** Winner! / gameplay
function winnerFunction(){
    let winner = ''
    while (playerScore < 5 && computerScore < 5 && roundCount < 20) {
    //playRound(getPlayerChoice(),getComputerChoice())
playRound('Rock', getComputerChoice())

    console.log('**************')

    console.log('Player: ' + playerScore)
    console.log('Computer: ' + computerScore)
    console.log('Tie: ' + tieCount)

    console.log('Round Count: ' + roundCount)

    console.log('**************')

    }
    if (playerScore > computerScore){
        winner = 'Player'
    }else{
        winner = 'Computer'
    }
    return winner
}

//    console.log('Victory goes to ' + winnerFunction())
 //   console.log('Player: ' + playerScore)
//    console.log('Computer: ' + computerScore)
//    console.log('Tie: ' + tieCount)



winnerFunction()


// ******** UI
const  player = document.querySelector('#playerScore');
const computerUi = document.querySelector('#computerScore')
const tie = document.querySelector('#tie');
const roundUI = document.querySelector('#roundCount')

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


/*
// ********* Works in progress *********
function getPlayerChoice(choice){
    switch(choice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
};

console.log(getPlayerChoice())
*/
/*
function gameRound(player){
    //let player
    
        //playerName = "player";
        player = playerChoice;
        computer = getComputerChoice();
        //computerName = "Computer"
        
        if (player === "Rock" && computer === "Rock"){
            winnerPlayer = 3;
        } else if (player === "Rock" && computer === "Paper"){
            winnerPlayer = 2;
        } else if (player === "Rock" && computer === "Scissors") {
            winnerPlayer = 1;
        } else if (player === "Paper" && computer === "Rock"){
            winnerPlayer = 1;
        } else if (player === "Paper" && computer === "Paper"){
            winnerPlayer = 3;
        } else if (player === "Paper" && computer === "Scissors") {
            winnerPlayer = 2;
        } else if (player === "Scissors" && computer === "Rock"){
            winnerPlayer = 2;
        } else if (player === "Scissors" && computer === "Paper"){
            winnerPlayer = 1;
        } else if (player === "Scissors" && computer === "Scissors") {
            winnerPlayer = 3;
        } else {
            winnerPlayer = 4
        }
    
        return winnerPlayer;
    
    }

    const rock = document.querySelector('#rock')
   rock.addEventListener('click',function() {
        const value = this.value;
   })
    console.log(value)


const btn = document.querySelector('#playerChoose');
btn.addEventListener('click', (event) => {
    let target = event.target;
    
    target.id
    //console.log(target.id);

     switch (target.id) {
        case 'rock': 
           playerChoice = 'Rock'
            //console.log(test)
            break;
        case 'Paper':
            playerChoice = 'Paper';
            break;
        case 'Scissors': 
            playerChoice = 'Scissors';
            break;
        
    }
    //console.log(test)
    
   console.log(playerChoice)


//console.log(playerChoice)

//player = playerChoice
gameRound(playerChoice)

});


// console.log("Computer :: " + getComputerChoice());
// console.log("Player :: " + getPlayerChoice());

let roundWin = gameRound( playerChoice );
console.log(roundWin);



/*
function game(roundWin , playerName){
    let playerWins, computerWins, tieWins;
    playerWins = 0;
    computerWins = 0;
    tieWins = 0;
    roundWin = gameRound();
    //branch testing

// how is this loop functional. When using || (or) the game continues on 
// to infinity, but when switching to && (and) the game stops at 5 wins
    while (computerWins < 5 && playerWins < 5 && tieWins < 5 ) {
        if (gameRound() === 1){
            playerWins++;
        } else if (gameRound() === 2){
            computerWins++;
        } else if (gameRound() === 3){
            tieWins++;
        } else {
            console.log("Try again, that is not a valid response.");
        }

        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
        console.log("Ties: " + tieWins);
    }


   



    return playerWins, computerWins, tieWins;

}

game();
*/