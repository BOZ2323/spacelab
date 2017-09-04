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
function pickRandomItem(){
        var randomItem = Math.floor(Math.random()* arrayOfEmptyBlocks.length);
        return randomItem;
}

// pickRandomItem() goes through the arrayOfEmptyBlocks and picks randomly an item. The return value is stored in the variable randomItem


function callRun2(){
        var randomProperty = pickRandomItem();
        drawBlock(arrayOfEmptyBlocks[randomProperty]);

        deleteNumFromArray(randomProperty);
}
function deleteNumFromArray(randomProperty){
    var blockRemovedArray = arrayOfEmptyBlocks.splice(randomProperty,1);
    if (blockRemovedArray !== null && blockRemovedArray.length != 0) {
        arrayOfFullBlocks.push(blockRemovedArray[0]);
    }
    
    if(arrayOfEmptyBlocks.length === 0){
        document.getElementById("myBtn").disabled = true;
    }
}

function drawBlock(currentBlock){
    var ctx = document.getElementById("myCanvas").getContext("2d");
	var img = document.getElementById("img" + currentBlock.img);
    ctx.drawImage(img, currentBlock.xPos, currentBlock.yPos, currentBlock.xFill, currentBlock.yFill);
}


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
function createBlocks()
{
    var block1 = new block("block1",1,4,4,92,92);
    var block2 = new block("block2",1,104,4,92,92);
    var block3 = new block("block3",1,204,4,92,92);
    var block4 = new block("block4",1,304,4,92,92);
    
    var block5 = new block("block5",1,4,104,92,92);
    var block6 = new block("block6",1,104,104,92,92);
    var block7 = new block("block7",1,204,104,92,92);
    var block8 = new block("block8",1,304,104,92,92);
    
    var block9 = new block("block9",1,4,204,92,92);
    var block10 = new block("block10",1,104,204,92,92);
    var block11 = new block("block11",1,204,204,92,92);
    var block12 = new block("block12",1,304,204,92,92);
    
    var block13 = new block("block13",1,4,304,92,92);
    var block14 = new block("block14",1,104,304,92,92);
    var block15 = new block("block15",1,204,304,92,92);
    var block16 = new block("block16",1,304,304,92,92);
    
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

// following is a test functions for the above data

function checkNeighbors()
{
    var test = "";

    for (var i = 0; i < arrayOfEmptyBlocks.length; i++)
        {
            currBlock = arrayOfEmptyBlocks[i];
            left = "";
            right = "";
            up = "";
            down = "";

            if (currBlock.blockLeft !== null)
            {
                left = currBlock.blockLeft.name;
            }

            if (currBlock.blockRight !== null)
            {
                right = currBlock.blockRight.name;
            }

            if (currBlock.blockUp !== null)
            {
                up = currBlock.blockUp.name;
            }

            if (currBlock.blockDown !== null)
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
        move("left");
        clearField();
        redrawField();
        callRun2();
        break;

        case 38: // up
        move("up");
        clearField();
        redrawField();
        callRun2();
        break;

        case 39: // right
        move("right");
        clearField();
        redrawField();
        callRun2();
        break;

        case 40: // down
        move("down");
        clearField();
        redrawField();
        callRun2();
        break;

        default: return; // exit this handler for other keys
}
};

function move(direction){
    
    var movement = false;

    do {
        movement = false;
        for (var i=0; i<arrayOfFullBlocks.length; i++){
        currentBlock = arrayOfFullBlocks[i];
        var currentBlockMove;
        switch (direction){
            case "left":
                currentBlockMove = currentBlock.blockLeft;
                break;
            case "right":
                currentBlockMove = currentBlock.blockRight;
                break;
            case "up":
                currentBlockMove = currentBlock.blockUp;
                break;
            case "down":
                currentBlockMove = currentBlock.blockDown;
                break;
        }

        // if the block cannot move right, either because there is a NULL or because the space is already full, meaning the block is in the arrayOfFullBlocks
         
        if (currentBlockMove === null || (arrayOfFullBlocks.indexOf(currentBlockMove) !== -1 && currentBlockMove.img !== currentBlock.img)){
            //if it is null, or it is in the arrayOfFullBlocks and the number of currentBlockMove is not the same a in currentBlock.img
            continue;
        }else if (arrayOfFullBlocks.indexOf(currentBlockMove) !== -1 && currentBlockMove.img == currentBlock.img){
                if (currentBlockMove.upDated || currentBlock.upDated){
                    continue;
                }
                currentBlockMove.upDated = true;
                currentBlockMove.img = currentBlockMove.img + 1;
                var justOneBlockArray =  arrayOfFullBlocks.splice(i,1);
                // we splice the item of the arrayOfEmptyBlocks, but push it to a variable, since otherwise it is stored as an array withing the arrayOfEmptyBlocks.
                if (justOneBlockArray !== null && justOneBlockArray.length != 0) {
                    arrayOfEmptyBlocks.push(justOneBlockArray[0]);
                }
                movement = true;
               break;
        }
        currentBlockMove.img = currentBlock.img;
        currentBlock.img = 1;
        arrayOfFullBlocks[i] = currentBlockMove;
        arrayOfEmptyBlocks[arrayOfEmptyBlocks.indexOf(currentBlockMove)] = currentBlock;
        // we swapped two positions. We put currentBlockRight (it was in the "empty" array) into the arrayOfFullBlocks. We put currentBlock, which was in the arrayOfFullBlocks into the arrayOfEmptyBlocks (where all empty arrays are.
        movement = true;
        }
    }
    while (movement);
}

function clearField(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
    for(var i = 0; i < arrayOfEmptyBlocks.length; i++){
        currentBlock = arrayOfEmptyBlocks[i];
        ctx.clearRect(currentBlock.xPos,currentBlock.yPos,currentBlock.xFill,currentBlock.yFill);
    }
}

function redrawField()
{
    for (var i = 0; i < arrayOfFullBlocks.length; i++) {
        currBlock = arrayOfFullBlocks[i];
        drawBlock(currBlock);
        currBlock.upDated = false;
    }
}

drawField();





