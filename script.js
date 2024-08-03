console.log("Welcome to Rock Paper Scissors!")
let compChoice;
let humanChoice;
let humanScore = 0;
let compScore = 0;
const buttons = document.querySelector(".buttons");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

//When a button is clicked, play a round
buttons.addEventListener("click", (e) => {
   results.textContent = playRound(e.target.id,getComputerChoice());
})


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

//Get both choices, find the winner, add score and tell them who won
function playRound(humanChoice,compChoice){
    let humanWin = false;
    let compWin = false;
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
    let message = '';
    //give the winner a point and tell the human who won
    if(!compWin && !humanWin){
        message =  "This round is a tie!";
    }else if(compWin){
        compScore++;
        message = "I win this round!";
    }else{
        humanScore++;
        message =  "You win this round!";
    }
    if(humanScore===5){
        score.textContent = "You won it all!";
        buttonsDisable(true);
    }else if(compScore===5){
        score.textContent = "I won it all!";
        buttonsDisable(true);
    }else{
        score.textContent = "Your score is "+humanScore+" to my "+compScore;
    }
    return message;
    
}

//set enable state of buttons
function buttonsDisable (state){
    const buttonNodeList = buttons.childNodes;
    buttonNodeList.forEach(element => {
        element.disabled = state;
    });

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
