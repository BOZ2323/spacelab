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
function pickRandomItem(){
        var randomItem = Math.floor(Math.random()* arrayOfBlocks.length);
        return randomItem;
}

/// pickRandomItem() goes through the arrayOfBlocks and picks randomly an item. The return value is stored in the variable randomItem


function callRun2(){
        var randomProperty = pickRandomItem();
        run2(arrayOfBlocks[randomProperty]);

        deleteNumFromArray(randomProperty);
}
function deleteNumFromArray(randomProperty){
    arrayOfBlocks.splice(randomProperty,1);
    if(arrayOfBlocks.length === 0){
        document.getElementById("myBtn").disabled = true;
    }
}

function run2(block){
    
	var c2 = document.getElementById("myCanvas");
    var ctx7 = c2.getContext("2d");
	
	ctx7.fillStyle = "#41f341";
	ctx7.fillRect(block.xPos,block.yPos,block.xFill,block.yFill);
	
	ctx7.font = "50px Arial";
	ctx7.fillStyle = "green";
	ctx7.fillText(block.num,block.numXPos,block.numYPos);
}


function block(name, xPos, yPos, xFill, yFill, num, numXPos, numYPos) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xFill = xFill;
	this.yFill = yFill;
	this.num = num;
	this.numXPos = numXPos;
    this.numYPos = numYPos;
    
    this.blockLeft = null;
    this.blockRight = null;
    this.blockUp = null;
    this.blockDown = null;

    this.setBlockNeighbors = function(left, right, up, down)
    {
        this.blockLeft = left;
        this.blockRight = right;
        this.blockUp = up;
        this.blockDown = down;
    };
}

var arrayOfBlocks = [];
function createBlocks()
{
    var block1 = new block("block1",0,0,96,96,2,35,65);
    var block2 = new block("block2",104,0,92,96,2,135,65);
    var block3 = new block("block3",204,0,92,96,2,235,65);
    var block4 = new block("block4",304,0,96,96,2,335,65);

    var block5 = new block("block5",0,104,96,92,2,35,165);
    var block6 = new block("block6",104,104,92,92,2,135,165);
    var block7 = new block("block7",204,104,92,92,2,235,165);
    var block8 = new block("block8",304,104,96,92,2,335,165);

    var block9 = new block("block9",0,204,96,92,2,35,265);
    var block10 = new block("block10",104,204,92,92,2,135,265);
    var block11 = new block("block11",204,204,92,92,2,235,265);
    var block12 = new block("block12",304,204,96,92,2,335,265);

    var block13 = new block("block13",0,304,96,96,2,35,365);
    var block14 = new block("block14",104,304,92,96,2,135,365);
    var block15 = new block("block15",204,304,92,96,2,235,365);
    var block16 = new block("block16",304,304,96,96,2,335,365);

    block1.setBlockNeighbors(null, block2,null,block5);
    block2.setBlockNeighbors(block1,block3,null,block6);
    block3.setBlockNeighbors(block2,block4,null,block7);
    block4.setBlockNeighbors(block3,null,null,block8);
    block5.setBlockNeighbors(null,block6,block1,block9);
    block6.setBlockNeighbors(block5,block7,block2,block10);
    block7.setBlockNeighbors(block6,block8,block3,block11);
    block8.setBlockNeighbors(block7,null,block4,block12);
    block9.setBlockNeighbors(null,block10,block5,block13);
    block10.setBlockNeighbors(block9,block11,block6,block14);
    block11.setBlockNeighbors(block10,block12,block7,block15);
    block12.setBlockNeighbors(block11,null,block8,block16);
    block13.setBlockNeighbors(null,block14,block9,null);
    block14.setBlockNeighbors(block13,block15,block10,null);
    block15.setBlockNeighbors(block14,block16,block11,null);
    block16.setBlockNeighbors(block15,null,block12,null);

    arrayOfBlocks.push(block1,block2,block3,block4,block5,block6,
            block7,block8,block9,block10,block11,block12,block13,
            block14,block15,block16);
}

drawField();
createBlocks();

function checkNeighbors()
{
    var test = "";

    for (var i = 0; i < arrayOfBlocks.length; i++)
        {
            currBlock = arrayOfBlocks[i];
            left = "";
            right = "";
            up = "";
            down = "";

            if (currBlock.blockLeft != null)
            {
                left = currBlock.blockLeft.name;
            }

            if (currBlock.blockRight != null)
            {
                right = currBlock.blockRight.name;
            }

            if (currBlock.blockUp != null)
            {
                up = currBlock.blockUp.name;
            }

            if (currBlock.blockDown != null)
            {
                down = currBlock.blockDown.name;
            }

            test += currBlock.name + ": (left: " + left + ")"
                            + ", (right: " + right + ")"
                            + ", (up: " + up + ")"
                            + ", (down: " + down + ")"
                            + "\n";
        }

    document.getElementById("neighborCheck").innerText = test;
}

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {

        case 37: // left
        callRun2();
        break;

        case 38: // up
        callRun2();
        break;

        case 39: // right
        callRun2();
        break;

        case 40: // down
        callRun2();
        break;

        default: return; // exit this handler for other keys
}
};





