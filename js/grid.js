$(document).ready(function() {
	
	var height = 20;
	var width = 100;
	var grid = new Array(width);
		
	for (var i=0; i<width; i++) {
		grid[i] = new Array(height);
	}
	
	var player1 = new Player(0, 0, 'X');
		
	populateGrid();
	updateGrid(player1);
	printGrid();
	
	
	//TODO At some point pass a grid as an argument, rather than using global
	function populateGrid() {
		for (var i=0; i<width; i++) {
			for (var j=0; j<height; j++) {
				grid[i][j] = '0';
			}
		}
	}
	
	//TODO accept an array of players as argument
	function updateGrid(player) {
		grid[player.xPos][player.yPos] = player.character;
	}
	
	function printGrid() {
		$('body').empty();
		for (var j=0; j<height; j++) {
			for (var i=0; i<width; i++) {
				$('body').append(grid[i][j]);
			}
			$('body').append('<br>');
		}
	}
	
	function Player(xPos, yPos, character) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.character = character;
	}
	
});