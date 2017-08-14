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


function drawField()
{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(100,0);
ctx.lineTo(100,400);
ctx.strokeStyle="green";
ctx.stroke();

var ctx2 = c.getContext("2d");
ctx2.moveTo(200,0);
ctx2.lineTo(200,400);
ctx2.strokeStyle="green";
ctx2.stroke();

var ctx3 = c.getContext("2d");
ctx3.moveTo(300,0);
ctx3.lineTo(300,400);
ctx3.strokeStyle="green";
ctx3.stroke();

var ctx4 = c.getContext("2d");
ctx4.moveTo(0,100);
ctx4.lineTo(400,100);
ctx4.strokeStyle="green";
ctx4.stroke();

var ctx5 = c.getContext("2d");
ctx5.moveTo(0,200);
ctx5.lineTo(400,200);
ctx5.strokeStyle="green";
ctx5.stroke();

var ctx6 = c.getContext("2d");
ctx6.moveTo(0,300);
ctx6.lineTo(400,300);
ctx6.strokeStyle="green";
ctx6.stroke();
}

function run()
{
	var c2 = document.getElementById("myCanvas");
    var ctx7 = c2.getContext("2d");
    var img = document.getElementById("scream");
    ctx7.drawImage(img,0,0,99,99);
    ctx7.drawImage(img,101,101,99,99);
    
};

drawField();







