$(document).ready(function() {
	
	var height = 20;
	var width = 100;
	var player1 = '1';
	var grid = new Array(width);
	

	//Build 2D array
	for (var i=0; i<width; i++) {
		grid[i] = new Array(height);
	}

	//Fill with zeroes
	for (var i=0; i<width; i++) {
		for (var j=0; j<height; j++) {
			grid[i][j] = '0';
		}
	}

	grid[3][2] = player1;

	//Output to screen
	for (var j=0; j<height; j++) {
		for (var i=0; i<width; i++) {
			$('#grid').append(grid[i][j]);
		}
		$('#grid').append('<br>');
	}
	
});