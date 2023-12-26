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

function playRound() {
    let winner;
    let player = getPlayerChoice();
    let computer = getComputerChoice();

    if (player === "Rock" && computer === "Rock"){
        winner = "Tie, Please play again!";
    } else if (player === "Rock" && computer === "Paper"){
        winner = "You Lose! Paper beats Rock";
    } else if (player === "Rock" && computer === "Scissors") {
        winner = "You Win! Rock beats Scissors";
    } else if (player === "Paper" && computer === "Rock"){
        winner = "You Win! Paper beats Rock";
    } else if (player === "Paper" && computer === "Paper"){
        winner = "Tie, Please play again!";
    } else if (player === "Paper" && computer === "Scissors") {
        winner = "You Lose! Scissors beats Paper";
    } else if (player === "Scissors" && computer === "Rock"){
        winner = "You Lose! Rock beats Paper";
    } else if (player === "Scissors" && computer === "Paper"){
        winner = "You Win! Scissors beats Paper";
    } else if (player === "Scissors" && computer === "Scissors") {
        winner = "Tie, Please play another Round";
    } else {
        winner = "Choice unknown, Please choose a valid option."
    }



t
    console.log(computer);
    console.log(player);
    console.log(winner);

    return winner;
}

// console.log("Computer :: " + getComputerChoice());
// console.log("Player :: " + getPlayerChoice());

while(true){
    alert("The winner of this round is: " + playRound())
}
