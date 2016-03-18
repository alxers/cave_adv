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
var HOME = 3;

var ROWS = map.length;
var COLS = map[0].length;

var SIZE = 64;

render();

//TODO: render