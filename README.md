# Quantum Duels RPSLS

Welcome to Quantum Duels, a modern take on the classic Rock, Paper, Scissors game with a quantum twist!

![screenshot of the webpage responsiveness](assets/images/gold-coasts-mockup.png)

## Purpose

The goal of the site is to provide the user with an interactive classic game.

## UX Design

### User stories

**As a user**

- I want to easily understand the rules of the game.
- I am interested in knowing my scores and rounds I have left.
- I want to be able to easily interact with the game choices when I click on the choices available.
- I want to be able to see my score and progress during the gameplay.
- I want to be able to play the game again when I run out of rounds and the game ends.

**All users want to be able to access and comfortably view the website on mobile devices**

# Description

Quantum Duels follows the rules of Rock, Paper, Scissors, Lizard, Spock but with a quantum twist! Which gives the users to test their skills and strategies against a quantum opponent (A.I).

## Features

## Features Left to Implement

- Add sound effects for each quantum choice when clicked on.
- Implement a multiplayer mode for online battles.
- Leaderboard system to rank players based on their scores.

## Technologies used

### Validator Testing

- HTML: No errors were returned when passing through the official [W3C validator](https://validator.w3.org/).
- CSS: No errors were returned when passing through the official ( Jigsaw ) validator.
- JS: No errors were returned when passing through the official [Jshint](https://jshint.com/) validator.
- Accessibility: I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![accessibility score](assets/images/lighthouse.png)

### Bugs

- Upon testing the website and playing the gameit came to my notice that user could continue playing the game and winning without running out of rounds just selecting the Superposition Scissors choice. The computer could not counter the move regardless the number of times the user selects the Superposition Scissors. Which made the game pretty boring to the user. I figured it was how i wrote the code for the function makeAdaptiveComputerChoice
- By introducing unpredictability: 30% chance to use adaptive choice and 70% chance to make a random choice. By using the Math.random() method, to return the counterMove() in the makeAdaptiveComputerChoice the bug was fixed and the computer could counter the users choices, making the game more competetive and interesting to the user.

## Deployment

This website was deployed to Github pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- Find pages then click on pages and find Build and Deployment
- From the source section drop-down menu, select the Main Branch
- Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The website can be accessed from the following link - []()

## Credits

### Contents

- The icons used on the site were sourced from [Font Awesome](https://fontawesome.com/).
- The fonts for the webpage was sourced from [Google fonts](https://fonts.google.com/).
- The images for the player and computer choice was sourced from [Akshaybahadur](https://www.akshaybahadur.com/post/rock-paper-scissors-lizard-spock).
- The background image was sourced from [Google](https://google.com/).


### Media

- The hero image was sourced from [https://annenberg.usc.edu/news/spotlight/they-dont-tell-us-about-nkrumah](https://annenberg.usc.edu/news/spotlight/they-dont-tell-us-about-nkrumah)
- images for the gallery was sources from [Wikipedia](https://en.wikipedia.org/wiki/Kwame_Nkrumah#Ghanaian_independence)
