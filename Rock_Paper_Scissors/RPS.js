let playerScore = 0 ;
let computerScore = 0 ; 
let roundWinner =" " ;

const rock_btn = document.getElementById("rock-btn");
const scissor_btn = document.getElementById("scissor-btn");
const paper_btn = document.getElementById("paper-btn");
const player_choice = document.getElementById("player-choice");
const computer_choice = document.getElementById("computer-choice");
const player_score = document.getElementById("human-score");
const computer_score = document.getElementById("computer-score");
const round_display = document.getElementById("round_update");

rock_btn.addEventListener('click', () => handleClick("Rock") );
paper_btn.addEventListener('click', () => handleClick("Paper") );
scissor_btn.addEventListener('click', () => handleClick("Scissor") );

function handleClick(playerSelection) {
    if (gameOver()) {
        // display the final screen that include the start over option
    }
    else {
      let computerSelection =  getComputerChoice() ;
    playRound(playerSelection,computerSelection) ;
    updateChoice(playerSelection, computerSelection) ;
    updateScore();
    
}

    
function updateScore() {
    //Template literals (`) are a way to create strings that can include variables or expressions within them,
    player_score.textContent = `Human: ${playerScore}` ;
    computer_score.textContent = `Computer: ${computerScore}` ;

    switch(roundWinner){
        case "Computer":
            round_display.textContent = "You Lost This Round";
            break;
        case "Player":
            round_display.textContent = "You Won This Round";
            break;
        case "Tie":
            round_display.textContent = "You Tie This Round";
            break;
    }


}
}

function updateChoice (playerSelection, computerSelection) {
    switch (computerSelection) {
        case "Rock" :
            computer_choice.textContent ="✊";
            break;
        case "Scissor" :
             computer_choice.textContent ="✌";
                break;
        case "Paper" :
            computer_choice.textContent ="✋";
                    break;
             }
    switch (playerSelection) {
                case "Rock" :
                    player_choice.textContent ="✊";
                    break;
                case "Scissor" :
                    player_choice.textContent ="✌";
                        break;
                case "Paper" :
                   player_choice.textContent ="✋";
                            break;
                    
            }
}



function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        roundWinner = "Tie";
    }
    else if 
    ( (playerSelection == "Rock" && computerSelection == "Paper") ||
     (playerSelection == "Paper" && computerSelection == "Scissor") || (playerSelection == "Scissor" && computerSelection == "Rock")
    )
    {
        roundWinner = "Computer" ;
        computerScore++;
    }
    else if 
    ( (playerSelection == "Rock" && computerSelection == "Scissor") ||
     (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissor" && computerSelection == "Paper")
    )
    {
        roundWinner = "Player" ;
        playerScore++;
    }

}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1; 
   switch (num) {
    case 1 :
        return "Rock" // return immidiately exit the function. No fall through
    case 2 :
        return "Scissor"
    case 3 :
        return "Paper"
   }

}

function gameOver() {
    if (playerScore == 5|| computerScore == 5) {
        return true; 
    }
    else {
        return false ;
    }
}