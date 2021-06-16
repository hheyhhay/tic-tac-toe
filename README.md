# tic-tac-toe
Mod 1: Final Solo Project


## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Reflections](#reflections)
  - [Project Specs](#project-specs)

## Introduction

  Now you and a friend can take the classic game of Tic-tac-toe virtually! Choice between being a cat or a dog and battle to who wins the three-in-a-row! 


## Technologies
  - Javascript
  - HTML
  - CSS

## Features
   
   - Two Players can play!
   - The scores are stored locally so no one loses their score!
   
## Code Architecture
  - The player.js file writes the class for the player instances that hold the method for saving to localStorage and retrieving from localStorage
  - The game.js file write the class for the Game instance and has two player instances as its arguement. Here the Data Model for the game is manipulated and stored. It checks for winning conditions, updates the players turns, updates the position of each player in an array, clears the board, and checks for a draw. 
  - The main.js file writes the DOM that represents the Data Model on the webpage. It renders the HTML files to represent the players positions and updates the winner's score. On pageload, it updates the winners scores that have been saved on localStorage from player's class. 
  - The HTML is the structure of how the web page is built.
  - The CSS styles the structure to have seperate columns and uses a grid for the gameboard. 

## Illustrations

![tic-tac-toe](https://user-images.githubusercontent.com/78764587/122145007-b0beeb00-ce11-11eb-91da-6621fba45839.gif)
Gif of the game in action. First shows Dog winning, the cat winning, and a draw between the two. 

![wireframe](https://user-images.githubusercontent.com/78764587/122145821-31321b80-ce13-11eb-93fd-d0a7470fab49.jpg)
A hand illustrated wireframe based off the comp given. 


## Possible Future Extensions

  - Create a clear wins button to clear saved wins in localStorage. 

## Set Up

1. Fork this repo  
2. Clone the repo to your local machine
3. View the project in the browser by running open index.html in your terminal


## Contributors
  - [Hayley Dixon](https://github.com/hheyhhay)

## Reflections
Producing my first multiplayer interactive game by myself was both exciting and difficult. I am much more confident in my JavaScript and HTML writing skills than my CSS. I made sure I allowed for time at the end of the project to refractor my CSS to make the sections interact and flex with eachother. Handdrawing my wireframe helped me understand what sections went together and how the different sections interacted with eachother. For my next project, I would like to explore and use wireframe technology, like miro.com. For my JavaScript, I built the data model first in the Player and Game class that could be played using the console. After the classes were built, I developed the DOM in the main.js file to show the changes in the data model on the page. In the future, I would like to spend more time building the Data Model first. Once I connected it to the DOM I found several errors in my conditionals for winning the game. 

As I continue on future projects, I want to focus on having clear and often commits and when working on a branch only work on the feature of that branch. I struggled with staying on branch-topic and found myself writing code that was outside the scope of the branch. 


## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)
