const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultPara = document.getElementById("result");
const playerScorePara = document.getElementById("player-score");
const computerScorePara = document.getElementById("computer-score");
const winnerPara = document.getElementById("winner");
const playAgainButton = document.getElementById("play-again");

let playerScore = 0;
let computerScore = 0;


// Function to generate computer's choice

function computerPlay(){
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function playRound(playerSelection){
    const computerSelection = computerPlay();


    if(playerSelection === computerSelection){
        resultPara.textContent = "It's a tie!";
    }else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        resultPara.textContent = 'You win!';
        playerScore++;
    }else{
        resultPara.textContent = 'You lose!';
        computerScore++;
    }

    updateScore();
    checkWinner();
}

// Function to update the score display
function updateScore(){
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}
// Function to check if a player has reached 5 points
function checkWinner(){
    if(playerScore === 5){
        winnerPara.textContent ='Congratulations! You win the game!';
        disableButtons();
        showPlayAgainButton();
    }else if(computerScore === 5){
        winnerPara.textContent = 'Sorry! You lose the game!';
        disableButtons();
        showPlayAgainButton();
    }
}

// Function to disable the buttons once a player wins

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Function to show the play again button

function showPlayAgainButton(){
    playAgainButton.style.display = "block"
}

// Function to reset the game

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = 'Player Score: 0';
    computerScorePara.textContent = 'Computer Score: 0';
    resultPara.textContent = "";
    winnerPara.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playAgainButton.style.display = "none"
}
// Event listeners for button clicks
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
playAgainButton.addEventListener("click", resetGame);
