let playerScore = 0;
let computerScore = 0;

let selection = document.querySelector('#selections');
let printedPlayerScore = document.querySelector('#playerScore');
let printedComputerScore = document.querySelector('#computerScore');
let results = document.querySelector('#results');

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice;
    if (num == 0) {
        choice = 'rock';
    }
    else if (num == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = capitalize(computerSelection);

    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || 
       (computerSelection === 'Paper' && playerSelection === 'Rock') || 
       (computerSelection === 'Scissors' && playerSelection === 'Paper')) {

        return 'loss';
    }
    else if (computerSelection == playerSelection) {
        return 'tie';
    }
    else {
        return 'win';
    }
}

function game(playerClick) {
    let playerChoice = playerClick;
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    return result;
}

function promptWinner(winner) {
    let popup = document.getElementById('popup');
    let winnerMessage = document.getElementById('winner-message');
    winnerMessage.textContent = winner + " wins the game!";
    popup.classList.remove('hidden');
    popup.classList.add('visible');
}

document.getElementById('close-popup').addEventListener('click', function() {
    let popup = document.getElementById('popup');
    popup.classList.add('hidden');
    popup.classList.remove('visible');
});

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    printNewScores();
}

function updateScore(result) {

    if (result == 'loss') {
        computerScore++;
    }
    else if (result == 'win') {
        playerScore++;
    }
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {   
            promptWinner("Player");
        }
        else {
            promptWinner("Computer");
        }
        restartGame();
        return false;
    }
    return true;
}

function handleClick(playerChoice) {
    let result = game(playerChoice);

    if (updateScore(result)) {
        printNewScores();
    }
}

function printNewScores() {
    printedPlayerScore.textContent = `Player: ${playerScore}`;
    printedComputerScore.textContent = `Computer: ${computerScore}`;
}

selection.addEventListener('click', (event) => {
    let target = event.target;
    let choices = ['rock', 'paper', 'scissors'];

    if (choices.includes(target.id)) {
        handleClick(capitalize(target.id));
    }
});
