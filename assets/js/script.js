let score = 0;
let rounds = 3;
let playerHistory = {
    quantumRock: 0,
    photonPaper: 0,
    superpositionScissors: 0,
    entangledLizard: 0,
    spockWaveFunction: 0
};

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