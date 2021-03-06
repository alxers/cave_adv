var stage = document.querySelector('#stage');
var output = document.querySelector('#output');

var map = [
            [0, 0, 0, 0, 0, 3],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ];

var gameObjects = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0],
          ];

// Use 'Life' instead of gold
// add enemies
var FLOOR = 0;
var GOLD = 1;
var PLAYER = 4;
// Exit, not Home?
var HOME = 3;
var ENEMY = 2;

var ROWS = map.length;
var COLS = map[0].length;

var SIZE = 64;

// Keys handler
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

// Find player's start position
var playerRow;
var playerCol;

// Game variables
var gold = 10;
var experience = 0;

for (var row = 0; row < ROWS; row++) {
    for (var col = 0; col < COLS; col++) {
        if (gameObjects[row][col] === PLAYER) {
            playerRow = row;
            playerCol = col;
        }
    }
}

document.addEventListener('keydown', keydownHandler, false);

function keydownHandler(e) {
    switch (e.keyCode) {
        case UP:
            // If player's move within the field
            if (playerRow > 0) {
                // Clear current cell
                gameObjects[playerRow][playerCol] = 0;
                // Move up one row
                playerRow--;
                gameObjects[playerRow][playerCol] = PLAYER;
            }
            break;
        case DOWN:
            if (playerRow < ROWS - 1) {
                gameObjects[playerRow][playerCol] = 0;
                playerRow++;
                gameObjects[playerRow][playerCol] = PLAYER;
            }
            break;
        case LEFT:
            if (playerCol > 0) {
                gameObjects[playerRow][playerCol] = 0;
                playerCol--;
                gameObjects[playerRow][playerCol] = PLAYER;
            }
            break;
        case RIGHT:
            if (playerCol < COLS - 1) {
                gameObjects[playerRow][playerCol] = 0;
                playerCol++;
                gameObjects[playerRow][playerCol] = PLAYER;
            }
            break;
    }

    switch (map[playerRow][playerCol]) {
        case FLOOR:
            console.log('floor');
            break;
        case GOLD:
            console.log('gold');
            break;
        case ENEMY:
            fight();
            break;
        case HOME:
            nextLevel();
            break;
    }

    render();
}

function fight() {
    // Define enemy strength (life points)
}

render();

function render() {

    // Clear stage of img tag cells
    // from the previous turn
    if (stage.hasChildNodes()) {
        for (var i = 0; i < ROWS * COLS; i++) {
            stage.removeChild(stage.firstChild);
        }
    }

    // Render the game
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {

            // We don't need this?
            // if (gameObjects[row][col] === PLAYER) {
            //     playerRow = row;
            //     playerCol = col;
            // }

            var cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            stage.appendChild(cell);

            switch(map[row][col]) {
                case FLOOR:
                    cell.innerHTML = '.';
                    break;
                case GOLD:
                    cell.innerHTML = 'G';
                    break;
                case HOME:
                    cell.innerHTML = 'E';
                    break;
            }

            // Add player
            switch (gameObjects[row][col]) {
                case PLAYER:
                    cell.innerHTML = 'P';
                    break;
            }

            // Position the cell
            cell.style.top = row * SIZE + 'px';
            cell.style.left = col * SIZE + 'px';

        }
    }
}