function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightgray");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle


    // https://p5js.org/reference/#/p5/rect


    // add your drawing here:

    fill('#CE2D4F');
    beginShape();
    vertex(500, 300);
    vertex(600, 400);
    vertex(800, 400);
    vertex(800, 300);
    endShape(CLOSE);

    fill('#CE2D4F');
    beginShape(TRIANGLES);
    vertex(600, 400);
    vertex(550, 500);
    vertex(600, 500);
    endShape();

    fill('#CE2D4F');
    beginShape(TRIANGLES);
    vertex(800, 400);
    vertex(750, 500);
    vertex(800, 500);
    endShape();

    fill('#CE2D4F');
    beginShape(TRIANGLES);
    vertex(800, 350);
    vertex(900, 300);
    vertex(900, 400);
    endShape();

    fill('#CE2D4F');
    beginShape();
    vertex(500, 300);
    vertex(450, 200);
    vertex(650, 200);
    vertex(600, 300);
    endShape(CLOSE);
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}