$(document).ready(function() {
	
	var height = 10;
	var width = 10;
	var grid = new Array(width);
		
	for (var i=0; i<width; i++) {
		grid[i] = new Array(height);
	}
	
	var player1 = new Player(5, 5, 'X');
	
	//Set up initial environment	
	populateGrid();
	updateGrid(player1);
	printGrid();
	
	//Listen for key press
	$('body').keydown(function(e) {
		if (e.keyCode >= 37 && e.keyCode <= 40) {
			updatePlayer(e.keyCode);
			updateGrid(player1);
			printGrid();
		}
	});
	
	
	function updatePlayer(direction) {
		switch(direction) {
			case 37: //left arrow
				if (player1.xPos > 0) {
					player1.xPos--;
				}
				else {
					alert("EDGE");
				}
				break;
			case 38: //up arrow
				if (player1.yPos > 0) {
					player1.yPos--;
				}
				else {
					alert("EDGE");
				}
				break;
			case 39: //right arrow
				if (player1.xPos < width-1) {
					player1.xPos++;
				}
				else {
					alert("EDGE");
				}
				break;
			case 40: //down arrow
				if (player1.yPos < height-1) {
					player1.yPos++;
				}
				else {
					alert("EDGE");
				}
				break;
			default:
				//De nada
		}
	}
	
	
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
		populateGrid();
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