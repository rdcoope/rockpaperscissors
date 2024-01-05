let playerName, player, computer;

computer = getComputerChoice();
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch (number){
            case 0: return 'Rock';
            case 1: return 'Paper';
            case 2: return 'Scissors';
    }
}
console.log(getComputerChoice())
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