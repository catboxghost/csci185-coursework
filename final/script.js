const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 500;
const canvas_height = canvas.height = 500;

const playerImage = new Image();
playerImage.src = 'graphics/spritesheetmodel.png';

let x = 0;

function frameAnimate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.fillRect(50, 50, 100, 100);
    x++;
    requestAnimationFrame(frameAnimate);
};

frameAnimate();
