$(document).ready(function() {
	
	var height = 20;
	var width = 100;
	var grid = new Array(width);
	
	for (var i=0; i<width; i++) {
		grid[i] = new Array(height);
	}
		
	populateGrid();
	grid[1][2] = player1;
	printGrid();
	
	
	//At some point pass a grid as an argument, rather than using global
	function populateGrid() {
		for (var i=0; i<width; i++) {
			for (var j=0; j<height; j++) {
				grid[i][j] = '0';
			}
		}
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
	
});