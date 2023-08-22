// Declaring variables
let score = 0;
let rounds = 3;
let playerHistory = {
    quantumRock: 0,
    photonPaper: 0,
    superpositionScissors: 0,
    entangledLizard: 0,
    spockWaveFunction: 0
};

// adding event listener to all buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".data-choice");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            playGame(button.id);
        });
    });
});
// Defining the main game functions
function playGame(choice) {
    updatePlayerHistory(choice);
    const computerChoice = makeAdaptiveComputerChoice();
    const result = determineWinner(choice, computerChoice);

    document.getElementById('playerChoice').textContent = "Your Choice: " + choice;
    document.getElementById('ComputerChoice').textContent = "Opponent's Choice: " + computerChoice;
    document.getElementById('duelOutcome').textContent = result;

    document.getElementById('playerChoiceImage').src = `assets/images/${choice}.png`;
    document.getElementById('computerChoiceImage').src = `assets/images/${computerChoice}.png`;

    if (result === 'You Prevailed!') {
        score++;
    } else if (result === 'Quantum Defeat!') {
        rounds--;
    }

    document.getElementById('quantumPoints').textContent = score;
    document.getElementById('duelRounds').textContent = rounds;

    if (rounds === 0) {
        alert('Quantum Duel Ends! Your quantum points are: ' + score);
        resetGame();
    }
}

function updatePlayerHistory(choice) {
    playerHistory[choice]++;
}

function makeAdaptiveComputerChoice() {
    const choices = Object.keys(playerHistory);
    let prediction = choices[0];

    for (let i = 1; i < choices.length; i++) {
        if (playerHistory[choices[i]] > playerHistory[prediction]) {
            prediction = choices[i];
        }
    }

    return counterMove(prediction);
}
