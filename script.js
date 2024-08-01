console.log("Welcome to Rock Paper Scissors!")
let compChoice;
let humanChoice;
let humanScore = 0;
let compScore = 0;



//Randomly assign a value as the computer's choice
function getComputerChoice(){
    let choice = Math.random();
    if (choice > .66) {
        return "scissors";
    }else if (choice <= .33) {
        return "rock";
    }else {
        return "paper";
    }
}

//Get the human's choice and make sure it is valid
function getHumanChoice(){
    let choice = prompt("What do you choose?");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
    }
}

//Get both choices, find the winner, add score and tell them who won
function playRound(humanChoice,compChoice){
    let humanWin = false;
    let compWin = false;
    console.log(compChoice) //make sure the computer isn't cheating
    //find the winner
    if(compChoice=='rock'){
        if(humanChoice=='paper'){
            humanWin = true;
        }else if(humanChoice=='scissors'){
            compWin = true;
        }
    }else if(compChoice=='paper'){
        if(humanChoice=='scissors'){
            humanWin = true;
        }else if(humanChoice=='rock'){
            compWin = true;
        }
    }else{
        if(humanChoice=='rock'){
            humanWin = true;
        }else if(humanChoice=='paper'){
            compWin = true;
        }
    }

    //give the winner a point and tell the human who won
    if(!compWin && !humanWin){
        return "It's a tie!";
    }else if(compWin){
        compScore++;
        return "I win!";
    }else{
        humanScore++;
        return "You win!";
    }
}

//play 5 rounds then announce an overall winner
function playGame(){
    humanScore = 0; //reset scores to 0
    compScore = 0;
    for(i = 1; i<=5; i++){ //play 5 rounds
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
    let winnerMessage;
    //compare scores and pick a winner
    if(humanScore>compScore){
        winnerMessage = "you win!";
    }else if(compScore>humanScore){
        winnerMessage = "I win!";
    }else{
        winnerMessage = "we tie!";
    }
    //announce the winner
    console.log("Your won "+humanScore+" times, I won "+compScore+" times. That means that "+winnerMessage);
}
