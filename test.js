document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {

        case 37: // left
        move();
        break;

        case 38: // up
        move();
        break;

        case 39: // right
        move();
        break;

        case 40: // down
        move();
        break;

        default: return; // exit this handler for other keys
}
};


function block(name, xPos, yPos, xFill, yFill) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xFill = xFill;
    this.yFill = yFill;
}


function drawBlock(currentBlock){
    
	var ctx = document.getElementById("myCanvas").getContext("2d");
	var img = document.getElementById(currentBlock.name);
    ctx.drawImage(img, currentBlock.xPos, currentBlock.yPos, currentBlock.xFill, currentBlock.yFill);
    ctx.strokeRect(currentBlock.xPos+2, currentBlock.yPos+2, currentBlock.xFill-3, currentBlock.yFill-3);
}

function drawCombinedBlock(currentBlock){
    
	var ctx = document.getElementById("myCanvas").getContext("2d");
    var img = document.getElementById(currentBlock.name);
    ctx.drawImage(img, currentBlock.xPos, currentBlock.yPos, currentBlock.xFill, currentBlock.yFill);
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "green";
    ctx.strokeRect(currentBlock.xPos+2, currentBlock.yPos+2, currentBlock.xFill-3, currentBlock.yFill-3);
}

function eraseBlock() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(currBlock.xPos,currBlock.yPos,currBlock.xFill,currBlock.yFill);
}

function move()
{
    var oldX = currBlock.xPos;

    for (var i = 0; i < 6; i++) {
        setTimeout(function() {
            animate()
        }, 20*i);
    }

    setTimeout(function() {reset(oldX)},120);

}

function reset(oldX)
{
    eraseBlock();
    resetLocation(oldX);
    currBlock2.name = "img2";
    drawCombinedBlock(currBlock2);
}

function animate() {
    eraseBlock();
    updateLocation();
    drawBlock(currBlock);
}

function resetLocation(oldLocation)
{
    currBlock.xPos = oldLocation;
}

function updateLocation()
{
    currBlock.xPos = currBlock.xPos + 20;
}

function go()
{
    move();
}

currBlock = new block("img1",10,10, 100,100);
currBlock2 = new block("img1",130,10, 100,100);


drawBlock(currBlock);
drawBlock(currBlock2);