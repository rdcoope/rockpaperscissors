let playerName, player, computer;
// player = getPlayerChoice();
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
function getPlayerChoice(){
    let playerChoice = prompt("Choose Rock (1), Paper (2), or Scissors (3)");
    let choice;

    if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "1" ) {
        choice = "Rock";
    } else if (playerChoice.toLowerCase() == "paper" || playerChoice === "2") {
        choice = "Paper";
    } else if (playerChoice.toLowerCase() === "scissors" || playerChoice === "3") {
        choice = "Scissors";
    }

    // console.log(playerChoice);
    // console.log(choice);
    return choice;
}

function playRound(playerName , player) {
    let winnerPlayer, winnerChoice;
    playerName = prompt("What is your name?")
    player = getPlayerChoice();
    let computer = getComputerChoice();
    console.log(playerName);




    console.log(computer);
    console.log(player);
    console.log(winnerPlayer);

    return winnerPlayer;
}

function gameRound(playerName, player, computer){


    playerName = "player";
    player = getPlayerChoice();
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

function game(roundWin , playerName){
    let playerWins, computerWins, tieWins;
    playerWins = 0;
    computerWins = 0;
    tieWins = 0;
    roundWin = gameRound();


    while (computerWins < 5 || playerWins < 5 || tieWins < 5 ) {
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