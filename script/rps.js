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
    let player = playerSelection;
    let computer = computerSelection;
    if ((computer === 'Rock' && player === 'Scissors') || 
        (computer === 'Paper' && player === 'Rock') || 
        (computer === 'Scissors' && player === 'Paper')) {
            console.log(`You lose and you suck, you loser...${computer}` + 
            ` beats ${player}`);
            return -1;
    }
    else if (computer == player) {
        console.log(`It\'s a tie. Do better next time. ` +
        `Both of you picked ${computer}.`);
        return 0;
    }
    else {
        console.log(`You cheated. You hacked and beat my game and found out ` +
        `that the computer picked ${computer}, and ${player} beats ` +
        `${computer}.`);
        return 1;
    }
}

function game() {
    // Let's store the scores of both players
    let playerScore = 0;
    let computerScore = 0;
    // And let's store the result of each round
    let round;
    // Let's also store the number of non-tie rounds
    let i = 0;
    // For 5 rounds
    while (i < 5) {
        // Collect the player's choice
        playerSelection = prompt("Rock, paper, or scissors? ");
        playerSelection = playerSelection.charAt(0).toUpperCase() + 
                          playerSelection.slice(1);
        
        // If the player provides an invalid input
        while (playerSelection != 'Rock' && playerSelection != 'Paper' &&
            playerSelection != 'Scissors') {
            playerSelection = prompt("Please provide a valid option " +
            "(rock, paper, or scissors): ");
            playerSelection = playerSelection.charAt(0).toUpperCase() + 
                              playerSelection.slice(1);
        }
        // Grab the computer's choice
        computerSelection = getComputerChoice();
        // Find out who won by playing the round
        round = playRound(playerSelection, computerSelection);
        // If round gives it to computer
        if (round == -1) {
            // Increment computer's score
            computerScore++;
        }
        // else if round gives it to player
        else if (round == 1) {
            // Increment player's score
            playerScore++;
        }
        // if it is a tie, we don't count it as a round
        else {
            continue;
        }
        i++;
    }

    if (playerScore > computerScore) {
        console.log("You won the 'best of 5' game. Good job...")
    }
    else if (computerScore > playerScore) {
        console.log("You horribly lost to a random pic generator in a " +
        "game of 5 rounds...")
    }
    else {
        console.log("You tied with a random pick generator. Wow...");
    }
}


game();