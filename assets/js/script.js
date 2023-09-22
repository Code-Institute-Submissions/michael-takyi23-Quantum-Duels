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

// Defining a function to handle all event listeners
function SetUpEventListeners() {

// Adding event listener to curtain raiser
window.addEventListener("load", function () {
    
    // Hide the curtain raiser and show the game content
    const curtainRaiser = document.getElementById("curtain-raiser");
    const gameContent = document.getElementById("container");

    curtainRaiser.style.display = "none";
    gameContent.style.display = "block";
});

//Adding event listener to make game rules accessible on smaller devices
document.addEventListener('DOMContentLoaded', function () {
        const gameRules = document.getElementById('rules').getElementsByTagName('h2')[0];
        const rulesList = document.getElementById('rules').getElementsByTagName('ul')[0];
        
        if (window.innerWidth <= 600) {
        gameRules.addEventListener('click', function () {
            rulesList.style.display = (rulesList.style.display === 'block') ? 'none' : 'block';
        });
    }
});
// Adding event listeners to the button elements
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            playGame(buttons[i].id);
        });
    }
});
}

SetUpEventListeners();

// Defining the main game functions
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
        alert('Quantum Duel Ends! Try again! Your quantum points are: ' + score);
        resetGame();
    }
}

function updatePlayerHistory(choice) {
    playerHistory[choice]++;
}

// This makes the computer Adapt to the players choices and predict to counter Move:
function makeAdaptiveComputerChoice() {
    const choices = Object.keys(playerHistory);
    let prediction = choices[0];

    for (let i = 1; i < choices.length; i++) {
        if (playerHistory[choices[i]] > playerHistory[prediction]) {
            prediction = choices[i];
        }
    }

    // Introduced unpredictability: 30% chance to use adaptive choice, 70% chance to make a random choice.
    if (Math.random() > 0.7) {
        return counterMove(prediction);
    } else {
        return choices[Math.floor(Math.random() * choices.length)];
    }
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
            let choices = ['quantumRock', 'photonPaper', 'superpositionScissors', 'entangledLizard', 'spockWaveFunction'];
            return choices[Math.floor(Math.random() * choices.length)];
    }
}

// defining the outcome of the game
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

// Resets Game when player runs out of rounds...
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



