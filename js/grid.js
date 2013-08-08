//TODO Got a pretty weird mix of jQuery and pure JS syntax here. Pick one.

$(document).ready(function() {
	
	var mapHeight = 6;
	var mapWidth = 9;
	var tileHeight = 171;
	var tileHeightOffset = 91;
	var tileWidth = 101;
	var mapPixelHeight = (mapHeight*tileHeight)-((mapHeight-1)*tileHeightOffset);
	var mapPixelWidth = mapWidth*tileWidth;
	var playerHeightOffset = 22;
	var oneFrameLength = 1000 / 40;
	var lastUpdate = Date.now();

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
	
	var earth = new Image();
	earth.src = 'tiles/earth.png';
	
	
	//Set up characters
	var dude =  new Image();
	dude.src = 'characters/dude.png';
	

	//Set up initial environment	
	instantiateMap();
	map[6][2].tileType = "water";
	map[6][3].tileType = "water";
	map[6][4].tileType = "water";
	map[5][3].tileType = "water";
	map[7][3].tileType = "water";
	map[7][4].tileType = "water";
	map[7][5].tileType = "earth";
	map[5][4].tileType = "earth";
	map[5][5].tileType = "earth";
	map[6][5].tileType = "earth";
	
	var player1 = new Player(0,0,"dude");
	
	
	
	var mainloop = function() {
		var now = Date.now();
		var dt = now - lastUpdate;
		lastUpdate = now;
		
		update(dt);
		draw(dt);
	};
	var myInterval = setInterval(mainloop, oneFrameLength);
	
	function update() {
		listen();
    player1.actualYPos = player1.actualYPos - (player1.actualYPos - player1.yPos);
    player1.actualXPos = player1.actualXPos - (player1.actualXpos - player1.xPos);
	}
	
	function listen() {
		if(keydown.up) {
			if(player1.yPos > 0) {
					player1.yPos -= tileHeightOffset;
			}
		}
		if(keydown.right) {
			if(player1.xPos < mapPixelWidth-tileWidth) {
				player1.xPos += tileWidth;
			}
		}
		if(keydown.down) {
			if(player1.yPos < mapPixelHeight-tileHeight) {
				player1.yPos += tileHeight;
			}
		}
		if(keydown.left) {
			if(player1.xPos > 0) {
				player1.xPos -= tileWidth;
			}
		}
	}
	
	function draw() {
		drawSky();
		printMap();
		drawPlayer(player1);
	}
	
	function drawSky() {
		ctx.fillStyle="#3BB9FF"; //Dark sky blue
		ctx.fillRect(0,0,mapPixelWidth,tileHeight);
	}
	
	function drawPlayer(player) {
		if (player.character === "dude") {
			ctx.drawImage(dude, player.xPos, player.yPos-playerHeightOffset);
		}
	}
	
	//TODO At some point pass a map as an argument, rather than using global
	function instantiateMap() {
		for (var i=0; i<mapWidth; i++) {
			for (var j=0; j<mapHeight; j++) {
				map[i][j] = new Tile();
			}
		}
	}
		
	function printMap() {
		var yOffset = 0;
		for (var j=0; j<mapHeight; j++) {
			var xOffset = 0;
			for (var i=0; i<mapWidth; i++) {
				//TODO Obviously find a better way of doing this
				if (map[i][j].tileType === "grass") {
					ctx.drawImage(grass, xOffset, yOffset);
				}
				else if (map[i][j].tileType === "water") {
					ctx.drawImage(water, xOffset, yOffset);
				}
				else if (map[i][j].tileType === "earth") {
					ctx.drawImage(earth, xOffset, yOffset);
				}
				xOffset += tileWidth;
			}
			yOffset += (tileHeight-tileHeightOffset);
		}
	}
	
	function Player(xPos, yPos, character) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.character = character;
		this.actualXPos = xPos;
		this.actualYPos = yPos;
	}
	
	function Tile(tileType) {
		if(typeof(tileType)==='undefined') tileType = "grass";
		this.tileType = tileType;
	}
	
});