function drawField()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	for (var i = 0; i < 5; i++)
	{
		var positionX = 100 * i;
		ctx.moveTo(positionX,0);
		ctx.lineTo(positionX,400);
		ctx.strokeStyle="green";
		ctx.lineWidth = "8";
		ctx.stroke();
	}
	
	for (var j = 0; j < 5; j++)
	{
		var positionY = 100 * j;
		ctx.moveTo(0,positionY);
		ctx.lineTo(400, positionY);
		ctx.strokeStyle="green";
		ctx.lineWidth = "8";
		ctx.stroke();
	}


}

drawField();



function block(name, img, xPos, yPos, xFill, yFill) {
    this.name = name;
    this.img = img;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xFill = xFill;
    this.yFill = yFill;
    this.upDated = false;
    
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

var arrayOfEmptyBlocks = [];
var arrayOfFullBlocks = [];
//console.log("*********",arrayOfFullBlocks);

var block1 = new block("block1","img1",4,4,92,92);
var block2 = new block("block2","img1",104,4,92,92);
var block3 = new block("block3","img1",204,4,92,92);
var block4 = new block("block4","img1",304,4,92,92);

var block5 = new block("block5","img1",4,104,92,92);
var block6 = new block("block6","img1",104,104,92,92);
var block7 = new block("block7","img1",204,104,92,92);
var block8 = new block("block8","img1",304,104,92,92);

var block9 = new block("block9","img1",4,204,92,92);
var block10 = new block("block10","img1",104,204,92,92);
var block11 = new block("block11","img1",204,204,92,92);
var block12 = new block("block12","img1",304,204,92,92);

var block13 = new block("block13","img1",4,304,92,92);
var block14 = new block("block14","img1",104,304,92,92);
var block15 = new block("block15","img1",204,304,92,92);
var block16 = new block("block16","img1",304,304,92,92);


function createBlocks()
{
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

    arrayOfEmptyBlocks.push(block1,block2,block3,block4,block5,block6,
            block7,block8,block9,block10,block11,block12,block13,
            block14,block15,block16);
}

createBlocks();


function drawBlock(currentBlock){
    
	var ctx = document.getElementById("myCanvas").getContext("2d");
	var img = document.getElementById(currentBlock.img);
    ctx.drawImage(img, currentBlock.xPos, currentBlock.yPos, currentBlock.xFill, currentBlock.yFill);
}

drawBlock(block1);

function move(currBlock)
{
    var oldX = currBlock.xPos;

    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            animate(currBlock)
        }, 20*i);
    }

    //setTimeout(function() {reset(oldX)},120);

}

function go()
{
    move(block1);
}



function eraseBlock(currBlock) {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(currBlock.xPos,currBlock.yPos,currBlock.xFill,currBlock.yFill);
}

function animate(currBlock) {
    eraseBlock(currBlock);
    updateLocation(currBlock);
    drawField();
    drawBlock(currBlock);
}

function resetLocation(currBlock, oldLocation)
{
    currBlock.xPos = oldLocation;
}

function updateLocation(currBlock)
{
    currBlock.yPos = currBlock.yPos + 20;
}
