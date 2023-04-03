let choice = 'X'
const addX = function(event) {
    const tileElement = event.target;
    $(tileElement).text(choice);
    $(tileElement).text(currentTileText);
    if (choice === 'X') {
        choice = 'O'
    } else if (choice === 'O') {
        choice = 'X'
    } 
}


const init = function() {
    $('.tile').on('click', addX);
}

$(document).ready(init)
// Overview
// Let's start out with something fun - a game!

// We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.

// "hand me your phone," load up the game, and play a quick round!

// You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!

// What You've Learned
// By the time you submit this project, you will have covered new ground in many of the big themes of the course:

// Command Line: Practice interacting with the computer and navigating the filesystem from the command line.
// Source Control: Manage and interact with a git repository to store changes to code.
// Programming Fundamentals: Work with array, objects, event handlers and callbacks, while learning how to strategically solve problems and resolve errors.
// Web Fundamentals: Learn how communication happens over the internet, and how to structure, style, and animate documents within a browser. Also learn how to respond to actions your users take and the data they input into the browser.
// Browser Applications: Dive into CSS, Sass, and how to use libraries and frameworks to get lots of style for free.
// Deployment: Host a static web site in a managed hosting environment.
// Products and Teams: Document your code and your code repository so others understand what you've built.
// Big Goals
// Build a web application from scratch, without a starter codebase
// Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
// Separate HTML, CSS, and JavaScript files in your application
// Build an application to a spec that someone else gives you
// Build a dynamic game that allows two players to compete
// Craft a readme.md file that explains your app to the world
// Technical Requirements
// Your app must:

// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)
