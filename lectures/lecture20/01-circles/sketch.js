function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');


    let y = 0;
    let w = 50;
    while (y <= 500) {
        circle(100, y, w);
        circle(300, y, w);
        circle(500, y, w);
        circle(700, y, w);
        y += 25;
        w += 10;
    }

    
    //circle(100, 200, 50);
    //circle(100, 250, 50);
    //circle(100, 300, 50);
    //circle(100, 350, 50);
    //circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
