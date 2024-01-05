let playerName, player, computer;

computer = getComputerChoice();
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1 ;
    let choice;
    
    if (number === 1){ choice = "Rock";
    } else if (number === 2){ choice = "Paper"; 
    } else {choice = "Scissors"; }

    // console.log(number);
    // console.log(choice);
    return choice;
}

const btn = document.querySelector('#playerChoose');
//console.log(btn)
let playerChoice = btn.addEventListener('click', (event) => {
    let target = event.target;
    
    //console.log(target.id);

    switch(target.id) {
        case 'rock':
            playerChoice = 'Rock'
            console.log(playerChoice);
            break;
        case 'Paper':
            playerChoice = 'Paper'
            console.log(playerChoice);
            break;
        case 'Scissors':
            playerChoice = 'Scissors'
            console.log(playerChoice);
            break;
            

    }
    return playerChoice
});
console.log(playerChoice)

playerChoice
function gameRound(playerName, playerChoice, computer){


    playerName = "player";
    player = playerChoice;
    computer = getComputerChoice();
    computerName = "Computer"
    
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

// console.log("Computer :: " + getComputerChoice());
// console.log("Player :: " + getPlayerChoice());

let roundWin = gameRound();
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