

function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}



function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    const penSize = document.querySelector('#pensize').value;
    const penColor = document.querySelector('#pencolor').value;
    const penShape = document.querySelector('#shape').value;
    const outline = document.querySelector('#outline').value;
    fill(penColor);
    stroke(outline);

    if (penShape === 'circle') {
        circle(mouseX, mouseY, penSize);
    } else if (penShape === 'square') {
        square(mouseX - penSize/2, mouseY - penSize/2, penSize);
    } else if (penShape === 'triangle') {
        triangle(
            mouseX, mouseY - penSize/2, 
            mouseX - penSize/2, mouseY + penSize/2, 
            mouseX + penSize/2, mouseY + penSize/2  
        );
    }


   // circle(mouseX, mouseY, penSize);
    
   // square(mouseX - penSize/2, mouseY - penSize/2, penSize);   // x (top left), y (top left), width
    
   // triangle(
   //     mouseX, mouseY - penSize/2, // first point
   //     mouseX - penSize/2, mouseY + penSize/2, // second point
   //     mouseX + penSize/2, mouseY + penSize/2  // third point
   // )
    
}

function clearButton(){
    const clear = document.querySelector('#canvas-holder').element.reset();
}


/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/