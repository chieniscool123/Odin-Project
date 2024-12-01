function getComputerChoice(){
    let num = Math.floor( Math.random() * 2) ;
    if ( num == 0) {
        num = "Scissor";
    }
    else if (num==1) {
       num = "Rock";
    }
    else if (num ==2) {
        num = "Paper";
    }
    return console.log("The MACHINE chose " + num);

};

function getHumanChoice(){
    let num = prompt("Choose 1,2 or 3 to play \n 1. Scissor \n 2.Rock \n 3.Paper ");
    if ( num == 1) {
        num = "Scissor";
    }
    else if (num==2) {
       num = "Rock";
    }
    else if (num ==3) {
        num = "Paper";
    }
    else {
        console.log("Please select 1-3");
        getHumanChoice();
    }
    return console.log("I choose " + num);
}

getHumanChoice();
getComputerChoice();