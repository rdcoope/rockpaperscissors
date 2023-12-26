function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1 ;
    let choice;
    
    if (number === 1){
        choice = "Rock";
    } else if (number === 2){
        choice = "Paper"; 
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

console.log("Computer :: " + getComputerChoice());
console.log("Player :: " + getPlayerChoice());