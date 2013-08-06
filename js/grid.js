var height = 20;
var width = 30;
var x = new Array(width);

//Build 2D array
for (var i=0; i<width; i++) {
	x[i] = new Array(height);
}


//Fill with zeroes
for (var i=0; i<width; i++) {
	for (var j=0; j<height; j++) {
		x[i][j] = '0';
	}
}

/*for (var i=0; i<width; i++) {
	for (var j=0; ;<height; j++) {
		document.write(x[i][j]);
	}
}*/