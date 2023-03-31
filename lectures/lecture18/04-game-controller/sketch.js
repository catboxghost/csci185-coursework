let x = 100;
let y = 200;
let width = 50;
let fillColor = 'hotpink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    //noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function bite() {
    circle(x, y, width);
    fill('red');
    width = 30;
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y = y - 10;
    } else if (ev.code === 'ArrowDown') {
        y = y + 10;
    } else if (ev.code === 'ArrowLeft') {
        x = x - 10;
    } else if (ev.code === 'ArrowRight') {
        x = x + 10;
    } else if (ev.code === 'Digit1') {
        fillColor = 'red';
    } else if (ev.code === 'Space') {
        width = width + 10;
    } else if (ev.code === 'Digit2') {
        fillColor = 'blue'
    } else if (ev.code === 'Minus') {
        width = width - 10;
    } else {
        fillColor = 'hotpink';
    }


    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}

function collisionDetect() {
        
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
