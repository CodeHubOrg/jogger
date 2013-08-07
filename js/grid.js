$(document).ready(function() {
	
	var mapHeight = 10;
	var mapWidth = 10;
	var tileHeight = 171;
	var tileWidth = 101;
	var map = new Array(mapWidth);
		
	for (var i=0; i<mapWidth; i++) {
		map[i] = new Array(mapHeight);
	}
	
	var player1 = new Player(5, 5, 'X');
	
	//Set up initial environment	
	populateMap();
	updateMap(player1);
	printMap();
	alert(map[0][1].tileType);
	
	//Listen for key press
	$('body').keydown(function(e) {
		if (e.keyCode >= 37 && e.keyCode <= 40) {
			updatePlayer(e.keyCode);
			updateMap(player1);
			printMap();
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
				if (player1.xPos < mapWidth-1) {
					player1.xPos++;
				}
				else {
					alert("EDGE");
				}
				break;
			case 40: //down arrow
				if (player1.yPos < mapHeight-1) {
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
	
	
	//TODO At some point pass a map as an argument, rather than using global
	function populateMap() {
		for (var i=0; i<mapWidth; i++) {
			for (var j=0; j<mapHeight; j++) {
				map[i][j] = new Tile();
			}
		}
	}
	
	//TODO accept an array of players as argument
	function updateMap(player) {
		populateMap();
		map[player.xPos][player.yPos] = player.character;
	}
	
	function printMap() {
		$('body').empty();
		for (var j=0; j<mapHeight; j++) {
			for (var i=0; i<mapWidth; i++) {
				$('body').append(map[i][j]);
			}
			$('body').append('<br>');
		}
	}
	
	function Player(xPos, yPos, character) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.character = character;
	}
	
	function Tile(tileType) {
    if(typeof(tileType)==='undefined') tileType = "grass";
		this.tileType = tileType;
	}
	
});