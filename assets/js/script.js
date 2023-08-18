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

    document.getElementById('playerChoiceImage').src = `assets/images/${choice}.jpg`;
    document.getElementById('computerChoiceImage').src = `assets/images/${computerChoice}.jpg`;

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

function counterMove(prediction) {
    switch (prediction) {
        case 'quantumRock':
            return 'photonPaper';
        case 'photonPaper':
            return 'superpositionScissors';
        case 'superpositionScissors':
            return 'entangledLizard';
        case 'entangledLizard':
            return 'quantumRock';
        case 'spockWaveFunction':
            return 'photonPaper';
        default:
            const choices = ['quantumRock', 'photonPaper', 'superpositionScissors', 'entangledLizard', 'spockWaveFunction'];
            return choices[Math.floor(Math.random() * choices.length)];
    }
}

function determineWinner(playerChoice, computerChoice) {
    let outcomeElement = document.getElementById('duelOutcome');

    if (playerChoice === computerChoice) {
        outcomeElement.style.color = "yellow"; 
        return 'Quantum Stalemate!';
    }
    if ((playerChoice === 'quantumRock' && (computerChoice === 'superpositionScissors' || computerChoice === 'entangledLizard')) ||
        (playerChoice === 'photonPaper' && (computerChoice === 'quantumRock' || computerChoice === 'spockWaveFunction')) ||
        (playerChoice === 'superpositionScissors' && (computerChoice === 'photonPaper' || computerChoice === 'entangledLizard')) ||
        (playerChoice === 'entangledLizard' && (computerChoice === 'spockWaveFunction' || computerChoice === 'photonPaper')) ||
        (playerChoice === 'spockWaveFunction' && (computerChoice === 'quantumRock' || computerChoice === 'superpositionScissors'))) {
        
        outcomeElement.style.color = "lime";
        return 'You Prevailed!';
    }

    outcomeElement.style.color = "red";
    return 'Quantum Defeat!';
}

function resetGame() {
    score = 0;
    rounds = 3;
    playerHistory = {
        quantumRock: 0,
        photonPaper: 0,
        superpositionScissors: 0,
        entangledLizard: 0,
        spockWaveFunction: 0
    };
    document.getElementById('quantumPoints').textContent = score;
    document.getElementById('duelRounds').textContent = rounds;
    document.getElementById('playerChoice').textContent = '';
    document.getElementById('ComputerChoice').textContent = '';
    document.getElementById('duelOutcome').textContent = '';
    document.getElementById('playerChoiceImage').src = 'assets/images/rpsls.png';
    document.getElementById('computerChoiceImage').src = 'assets/images/rpsls.png';
}