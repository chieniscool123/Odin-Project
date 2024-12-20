

/* function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1; 
    return num;
}

function getHumanChoice() {
    let num;
    while (true) {  
        num = prompt("Choose 1, 2 or 3 to play \n 1. Scissor \n 2. Rock \n 3. Paper "); // always return a string 
        if (num == 1 || num == 2 || num == 3) {
            return num;  
        }
        console.log("Please select 1-3");
    }
}

function playGame() {
   
    let humanScore = 0;
    let computerScore = 0;
    function getChoice() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanSelection, computerSelection) {
        humanSelection = parseInt(humanSelection); // must convert it to an int because prompt always return an int
        if (humanSelection == computerSelection) {
           let choice ;
            switch (humanSelection) {
                    case 1 :
                     choice = "Scissor";
                    break;
                    case 2 :
                        choice = "Rock";
                       break; 
                       case 3 :
                       choice = "Paper";
                      break;
            }
            console.log( "You Draw. You both pick " + choice );
        }

        else if (humanSelection ==1 ) { // You don't need to use parse int for this because JavaScript is a loosely-typed language, meaning it automatically converts values between types when necessary. When comparing a string (e.g., '2') with a number (e.g., 2), JavaScript will attempt to convert the string to a number in order to perform the comparison.
           if (computerSelection == 3 ) {
               humanScore +=1 ;
   
              console.log( "You Won. Computer Chose Paper. You Chose Scissor");
           } 
           
           else {
               computerScore +=1;
               console.log(  "You Lost. Computer Choose Rock. You Chose Scissor" );
           }
        }
        else if (humanSelection == 2 ) {
           if (computerSelection == 3 ) {
               computerScore +=1;
   
               console.log(  "You Lost. Computer Chose Paper. You Chose Rock" );
           } 
           else {
               humanScore +=1 ;
   
               console.log(  "You Won. Computer Choose Scissor. You Chose Rock" );
           }
        }
   
       else if (humanSelection == 3 ) {
           if (computerSelection == 1 ) {
               computerScore +=1;
   
               console.log(  "You Lost. Computer Chose Scissor. You Chose Paper" );
           } 
           else {
               humanScore +=1 ;
   
               console.log(  "You Won. Computer Choose Rock. You Choose Paper" );
           }
        }
       }
   
       for (let i = 0; i < 5; i++) {
       getChoice();
      }
      console.log("Human Score = " + humanScore +"\n" + "Computer Score = " + computerScore + "\n" + "Draw Score = " + (5-humanScore - computerScore));
}

playGame();
