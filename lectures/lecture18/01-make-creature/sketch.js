function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // makeCreature(200, 200, 'red', 'blue');
    // makeCreature(500, 300, 'hotpink');
    // makeCreature(800, 100, 'lightblue', 'orange')

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor='black') {

    // your creature:
    fill(fillColor);
    circle(x, y, 200);

    fill(eyeColor);
    ellipse(x - 50, y - 30, 20, 30);
    ellipse(x + 50, y - 30, 20, 30);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'hotpink');
}