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


function drawBlock(){
    
	var ctx = document.getElementById("myCanvas").getContext("2d");
	var img = document.getElementById(currBlock.name);
    ctx.drawImage(img, currBlock.xPos, currBlock.yPos, currBlock.xFill, currBlock.yFill);
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
    drawBlock();
}

function animate() {
    eraseBlock();
    updateLocation();
    drawBlock();
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
drawBlock(currBlock);