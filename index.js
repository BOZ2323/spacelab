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
	
	for (var i = 0; i < 3; i++)
	{
		var positionX = 100 + (100 * i);
		ctx.moveTo(positionX,0);
		ctx.lineTo(positionX,400);
		ctx.strokeStyle="green";
		ctx.lineWidth = "8";
		ctx.stroke();
	}
	
	for (var j = 0; j < 3; j++)
	{
		var positionY = 100 + (100 * j);
		ctx.moveTo(0,positionY);
		ctx.lineTo(400, positionY);
		ctx.strokeStyle="green";
		ctx.lineWidth = "8";
		ctx.stroke();
	}

}

function run()
{
	var c2 = document.getElementById("myCanvas");
    var ctx7 = c2.getContext("2d");
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(0,204,96,92);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",35,265);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(104,204,92,92);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",135,265);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(204,204,92,92);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",235,265);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(304,204,96,92);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",335,265);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(0,304,96,96);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",35,365);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(104,304,92,96);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",135,365);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(204,304,92,96);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",235,365);
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(304,304,96,96);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText("2",335,365);
    ////////
    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(0,0,96,96);

    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",35,65);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(104,0,92,96);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",135,65);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(204,0,92,96);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",235,65);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(304,0,96,96);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",335,65);
    ////////////
    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(0,104,96,92);

    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",35,165);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(104,104,92,92);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",135,165);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(204,104,92,92);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",235,165);

    ctx7.fillStyle = "#41f341";
    ctx7.fillRect(304,104,96,92);


    ctx7.font = "50px Arial";
    ctx7.fillStyle = "green";
    ctx7.fillText("2",335,165);
}

function block(xPos, yPos, xFill, yFill, num, numXPos, numYPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.xFill = xFill;
	this.yFill = yFill;
	this.num = num;
	this.numXPos = numXPos;
	this.numYPos = numYPos;
}

function createBlocks()
{


}

drawField();







