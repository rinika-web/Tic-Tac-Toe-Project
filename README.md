# Tic-Tac-Toe

## Description
This project is a simple implementation of the classic Tic Tac Toe game built using React. It allows two players to take turns marking the cells of a 3x3 grid with 'X' and 'O'. The game ends when one player manages to place three of their marks in a horizontal, vertical, or diagonal row, or when all cells are filled, resulting in a draw.

## Features
Two-player gameplay
Detects win and draw conditions
Automatically resets the game after a win or draw
Responsive and interactive UI with Tailwind CSS for styling
## Screenshot
![Tic-Tac-toe Screenshot_20240611_150906_Dropbox](https://github.com/rinika-web/Tic-Tac-Toe-Project/assets/84087885/824cf720-50bb-4e89-bdea-1f458710f0e0)


## Getting Started
Follow these instructions to set up and run the project locally.

## Prerequisites
Node.js
npm (Node Package Manager)
Installation

**Clone the repository:**

<git clone https://github.com/rinika-web/tic-tac-toe-react.git>
cd tic-tac-toe-react
Install dependencies:


npm install

## Start the development server:

npm start

## Open the game in your browser:

Visit http://localhost:3000 to play the game.

## Code Overview
TicTacToe.js
This is the main component of the application. It manages the game state and logic.

## State Variables:

chart: An array representing the game board.
pointer: Indicates the current player's mark ('X' or 'O').
winner: Stores the winner of the game or 'Draw'.
Functions:

click(n): Handles cell clicks, updates the game board, switches players, and checks for a winner.
checkWinner(currentChart): Checks the current game board for a winning combination or draw.
reset(): Resets the game state for a new game.
useEffect Hook:

Automatically resets the game 3 seconds after a win or draw.
Tailwind CSS
Tailwind CSS is used for styling the game board and UI elements. Ensure you have the required setup for Tailwind CSS in your project.

## Usage
Click on any cell to place your mark ('X' or 'O').
The game will automatically detect a winner or a draw.
The game will reset after 3 seconds of displaying the winner or draw message.
You can also manually reset the game by clicking the "Reset" button.
Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.

## Acknowledgements
This project was bootstrapped with Create React App.
Tailwind CSS for the beautiful styling.
