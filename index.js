function makeRow(numberOfFields) {
	var number = null;
	var row = [];
	for(var i=0; i<numberOfFields; i++) {
		row.push(number);
	}
	return row;
}  

function makeField(numberOfRows) {
	var field = [];
	var row;
	for(var i =0; i<numberOfRows; i++){
    row = makeRow(numberOfRows);
		field.push(row);
	}
	return field;
}

var playingField = makeField(4);
console.log("playingField",playingField);

function getRandomCoordinates(playfieldSize) {
    return [
        Math.floor(Math.random()* playfieldSize),
        Math.floor(Math.random()* playfieldSize)
    ];
}

function placeNumberAtRandomFreePosition(number) {
    var x, y;
    var field = makeField(4);
    console.log("big field",field);
    do {
        var coordinates = getRandomCoordinates(4);
        x = coordinates[0];
        console.log(x);
        y = coordinates[1];
        console.log(y);
        playingField[x][y] = number;//set playingField[x][y] = 2; 
        console.log("playingField x y: ",playingField[x][y]);
    } while(field[x][y] !== null);//as long as field[x][y] does not equal 0;
    console.log ("field",field[x][y]);
}

placeNumberAtRandomFreePosition(2);
placeNumberAtRandomFreePosition(2);

console.log("final playingField",playingField);
