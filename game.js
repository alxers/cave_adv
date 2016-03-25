var stage = document.querySelector('#stage');
var output = document.querySelector('#output');

var map = [
            [0, 2, 0, 0, 0, 3],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0],
            [0, 2, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ];

var FLOOR = 0;
var GOLD = 1;
// Exit, not Home?
var HOME = 3;

var ROWS = map.length;
var COLS = map[0].length;

var SIZE = 64;

render();

//TODO: render

function render() {

    // Clear stage of img tag cells
    // from the previous turn
    if (stage.hasChildNodes()) {
        for (var i = 0; i < ROWS * COLS; i++) {
            stage.removeChild(stage.firstChild) {

            }
        }
    }

    // Render the game
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {
            var cell = document.createElement('img');
            cell.setAttribute('class', 'cell');
            stage.appendChild(cell);

            // Find the correct image for this map cell
            switch(map[row][col]) {
                case FLOOR:
                    cell.src = '../images/floor.png';
                    break;
                case GOLD:
                    cell.src = '../images/gold.png';
                case HOME:
                    cell.src = '../images/home.png'
            }

            // Position the cell
            cell.style.top = row * SIZE + 'px';
            cell.style.left = row * SIZE + 'px';

        }
    }
}