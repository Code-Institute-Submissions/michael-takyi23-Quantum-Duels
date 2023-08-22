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
// add event listener to all buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".data-choice");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            playGame(button.id);
        });
    });
});
