let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let restart = document.querySelector(".restart");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


let finalWinner = (userScore,compScore)=> {
    if(userScore === 5) { 
        console.log("You Won the Game");
        // add JS code that genarate an awesome thing which displays you won game 
    } else if(compScore === 5) {
        console.log("Computer Won the game");
        // add JS code that genrate an awesome thing which displays computer won game 
    }
}
let drawGame = ()=> {
    console.log("Game Was Draw");
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loss");
        msg.innerText = `You Loss.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    finalWinner(userScore,compScore);
}

const genCompChoice = ()=> {
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let playGame = (userChoice)=> {
    console.log("user choice = ",userChoice);
    let compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(compChoice === userChoice) {
        // Draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors(loss-false) paper(win-true)
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper") {
            // scissors rock
            userWin = compChoice === "scissors"? false : true;
        } else {
            // rock paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice); // either true or false is passed as arg
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

let reset = ()=>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    console.log("akja")
}

restart.addEventListener("click",reset);