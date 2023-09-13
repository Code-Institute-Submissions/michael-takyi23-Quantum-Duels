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

- HTML
-  Errors found when passed my code through the validator, were in the header element, some links weren't properly placed, also the script closing tag was also missing, by placing the appropriate the tags and links to my favicon and style.css the errors were fixed. All buttons when clicked reacted and worked as expected, No errors were returned when passed the code again through the official [W3C validator](https://validator.w3.org/).
- CSS:
- Passing the code through the jigsaw validator, I realised that I did not place clossing semicolons to most of the style for some ids and classed, by placing the colons and passing the code throught the validator No errors were returned ( Jigsaw ).
- JS: 
- When passing my code through the JS hint validator, I realsed that, most of the aurguments I passed lack closure, example the semicolons and some parentheses and also some of the camelCases weren't placed properly, by the correcting the errors and rechecking the code, no errors were returned also some buttons weren't responding, I realised I have made some erros with my event listeners, when i use getElementsByClassName, so I used querySelectAll and it worked. when I passed the code through the official [Jshint](https://jshint.com/) validator it retuened no errors.
- Accessibility: 
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.
- Also the media queries i used worked when i checked the responsiveness on various devices especially mobile devices, I used [responsivedesignchecker](https://responsivedesignchecker.com/) and [AmIresponsive](https://ui.dev/amiresponsive?/)

![accessibility score](assets/images/lighthouse.png)

### Bugs

- Upon testing the website and playing the game it came to my notice that the user could continue playing the game and winning without running out of rounds just selecting the Superposition Scissors choice which could encourage cheating. The computer could not counter the move regardless the number of times the user selects the Superposition Scissors. Which made the game pretty boring to the user because the user could easily cheat and win as many times as they please. I figured it was how I wrote the code for the function makeAdaptiveComputerChoice
- By introducing unpredictability: 30% chance to use adaptive choice and 70% chance to make a random choice. With the use of the Math.random() method, to return the counterMove() in the makeAdaptiveComputerChoice the bug was fixed and the computer could counter the users choices, making the game more challenging and interesting to the user.

## Deployment

This website was deployed to Github pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- scroll down to find pages then click on pages and find Build and Deployment
- From the source section click the drop-down menu, select the branch name Main,
- Select save and then refresh page, scroll back down the refreshed page to get the deployed website link.

The website can be accessed from the following link - []()

## Credits

### Contents

- The icons used on the site were sourced from [Font Awesome](https://fontawesome.com/).
- The fonts for the webpage was sourced from [Google fonts](https://fonts.google.com/).

### Media

- The images for the player and computer choice was sourced from [Akshaybahadur](https://www.akshaybahadur.com/post/rock-paper-scissors-lizard-spock).
- The background image was sourced from [Google](https://google.com/).
