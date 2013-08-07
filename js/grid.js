//TODO Got a pretty weird mix of jQuery and pure JS syntax here. Pick one.

$(document).ready(function() {
	
	var mapHeight = 6;
	var mapWidth = 9;
	var tileHeight = 171;
	var tileHeightOffset = 91;
	var tileWidth = 101;
	var mapPixelHeight = (mapHeight*tileHeight)-((mapHeight-1)*tileHeightOffset);
	var mapPixelWidth = mapWidth*tileWidth;

	//2D array for map
	var map = new Array(mapWidth);
	for (var i=0; i<mapWidth; i++) {
		map[i] = new Array(mapHeight);
	}
	
	//Canvas stuff
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width = mapPixelWidth;
	ctx.canvas.height = mapPixelHeight;
	

	//Set up tile images
	var grass = new Image();
	grass.src = 'tiles/grass.png';
	
	var water = new Image();
	water.src = 'tiles/water.png';


	//Set up initial environment	
	populateMap();
	map[6][2].tileType = "water";
	
	printMap();
	
	
	/*Listen for key press
	$('body').keydown(function(e) {
		if (e.keyCode >= 37 && e.keyCode <= 40) {
			updatePlayer(e.keyCode);
			updateMap(player1);
			printMap();
		}
	});*/
	
	
	/*function updatePlayer(direction) {
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
	}*/
	
	
	//TODO At some point pass a map as an argument, rather than using global
	function populateMap() {
		for (var i=0; i<mapWidth; i++) {
			for (var j=0; j<mapHeight; j++) {
				map[i][j] = new Tile();
			}
		}
	}
	
	/*//TODO accept an array of players as argument
	function updateMap(player) {
		populateMap();
		map[player.xPos][player.yPos] = player.character;
	}*/
		
	function printMap() {
		var yOffset = 0;
		for (var j=0; j<mapHeight; j++) {
			var xOffset = 0;
			for (var i=0; i<mapWidth; i++) {
				if (map[i][j].tileType === "grass") {
					ctx.drawImage(grass, xOffset, yOffset);
				}
				else if (map[i][j].tileType === "water") {
					ctx.drawImage(water, xOffset, yOffset);
				}
				xOffset += tileWidth;
			}
			yOffset += (tileHeight-tileHeightOffset);
		}
	}
	
	/*function Player(xPos, yPos, character) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.character = character;
	}*/
	
	function Tile(tileType) {
    if(typeof(tileType)==='undefined') tileType = "grass";
		this.tileType = tileType;
	}
	
});