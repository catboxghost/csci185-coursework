const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#a6ff40", "#fcba03", "#40f2ff", "#ff40ec"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min + 1) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(randomFloat(min, max));
}

/**
 * Challenge problems:
 *    1. Instead of always using the same fill color, randomly
 *    select a color from the colors array above.
 *    2. Use a loop to draw many random circles.
 *    3. Consider animating the drawing by putting your logic in the 
 *       draw() function instead of the setup() function.
 *    4. Experiment with drawing other shapes (e.g., squares, lines, 
 *       triangles, etc.). Scroll down to the bottom for sample code.
 * */

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    
    fill("#08415c");

    // 'i' is a counter, it stores the number of objects
    let i = 0;

    //generates up to 25 circles, squares, or triangles with random sizes, positions, and colors
    while (i < 25) {
        fill(colors[randomInt(0, 4)]);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let diameter = randomFloat(25, 125);

        circle(x, y, diameter);

        fill(colors[randomInt(0, 4)]);
        let x1 = randomInt(0, canvasWidth);
        let y1 = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);

        square(x1, y1, size);

        let x2 = randomInt(0, canvasWidth);
        let y2 = randomInt(0, canvasHeight);
        let size1 = randomFloat(25, 125);

        fill(colors[randomInt(0, 4)]);
        triangle(
            x2, y2 - size1 / 2, 
            x2 - size1 / 2.25, y2 + size1 / 4.3,
            x2 + size1 / 2.25, y2 + size1 / 4.3
        );

        //iterates the counter forward
        i++;
    };


    
    
}



 
// other stuff you can do:
// draw a random square:
// square(x, y, size);

// // draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

