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

console.log(getComputerChoice());