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
    let player = capitalize(playerSelection);
    let computer = capitalize(computerSelection);

    if ((computer === 'Rock' && player === 'Scissors') || 
       (computer === 'Paper' && player === 'Rock') || 
       (computer === 'Scissors' && player === 'Paper')) {

            console.log(`You lose! ${computer} beats ${player}`);
            return 'loss';
    }
    else if (computer == player) {
        console.log(`You tied! You both picked ${computer}.`);
        return 'tie';
    }
    else {
        console.log(`You won! ${player} beats ${computer}.`);
        return 'win';
    }
}

function printScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the best of 5 rounds. :)");
    }
    // Please note that the tie case never occurs since we replay "tied" rounds
    else {
        console.log("You lost the best of 5 rounds. :(");
    }
}

function playRounds() {
    let result;
    let playerChoice;
    let computerChoice;
    do {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
    } while (result === 'tie');
    
    return result;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    playerChoice = capitalize(playerChoice);

    while (playerChoice != 'Rock' && playerChoice != 'Paper' 
           && playerChoice != 'Scissors') {

        playerChoice = prompt("Please provide a valid option " +
        "(rock, paper, or scissors): ");

        playerChoice = capitalize(playerChoice);
    }

    return playerChoice;
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let numRounds = 0; numRounds < 5; numRounds++) {
        roundResult = playRounds();

        if (roundResult == 'loss') {
            computerScore++;
        }
        else {
            playerScore++;
        }
    }

    printScore(playerScore, computerScore);
}

game();