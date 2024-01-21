// Created a function for computer's choice
// in rock paper scissors
function getComputerChoice() {
    // The choice will be a random number from 0-2
    let num = Math.floor(Math.random() * 3);
    let choice;
    // If num is 2, the choice is rock
    if (num == 2) {
        choice = 'Rock';
    }
    // If num is 1, the choice is paper
    else if (num == 1) {
        choice = 'Paper';
    }
    // If num is 0, the choice is scissors
    else {
        choice = 'Scissors';
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computer = computerSelection;
    if ((computer === 'Rock' && player === 'Scissors') || 
        (computer === 'Paper' && player === 'Rock') || 
        (computer === 'Scissors' && player === 'Paper')) {
            return `You lose and you suck, you loser...${computer} beats ${player}`;
        }
    else if (computer == player) {
        return `It\'s a tie. Do better next time. Both of you picked ${computer}.`;
    }
    else {
        return 'You cheated. You hacked and beat my game and found out that ' + 
        `the computer picked ${computer}.`;
    }
}