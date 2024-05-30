let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreElem = document.getElementById("user-score");
const compScoreElem = document.getElementById("comp-score");
const msgElem = document.getElementById("msg");
const compChoiceElem = document.getElementById("comp-choice");


choices.forEach((choice) => {                       // choices-> array like collection of data
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const getCompChoice = () => {                                                               //Math.random generates a random number eg:- 0.1232432477654
    const options = ["rock", "paper", "scissors"];              // Math.Floor removes the unwnted numbers after the decimal
    const randIdx = Math.floor(Math.random() * 3);              //*3 is done to get number bt 0 and 10//Math.random generates a random number eg:- 0.1232432477654
    return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("user selected ", userChoice);
    const compChoice = getCompChoice();
    console.log("comp selected ", compChoice);
    compChoiceElem.innerText = "Computer chose: " + compChoice;   // showing computer generated move
    if (userChoice === compChoice) {                                // draw game condition
        drawGame();
    }

    if (compChoice === "paper") {                                   // winning conditions combinations for user and computer
        if (userChoice === "rock") {
            console.log("computer won");
            compWins();
        }
        else if(userChoice="scissors") {
            console.log("user won");
            userWins();
        }
    }

    if (compChoice === "rock") {
        if (userChoice === "paper") {
            console.log("user won");
            userWins();
        }
        else if(userChoice==="scissors") {
            console.log("computer won");
            compWins();
        }
    }

    if (compChoice === "scissors") {
        if (userChoice === "rock") {
            console.log("user won");
            userWins();
        }
        else if(userChoice==="paper") {
            console.log("computer won");
            compWins();
        }
    }

}

const drawGame = () => {                            // draw 
    msgElem.innerText = "It's a draw!";
}

const userWins = () => {                            //user score counter and winning msg
    userScore++;
    userScoreElem.textContent = userScore;
    msgElem.innerText = "You win this round!";
}

const compWins = () => {                            //comp score counter and winning msg
    compScore++;
    compScoreElem.innerText = compScore;
    msgElem.innerText = "Computer wins this round!";
}

