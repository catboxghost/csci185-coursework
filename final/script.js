const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

console.log(ctx);

//establish canvas dimensions
const canvas_width = canvas.width = 1024;
const canvas_height = canvas.height = 576;

const scaledCanvas = {
    width: canvas.width / 2,
    height : canvas.height / 2
};

//establish gravity
const gravity = 0.5;

//instantiate sprites
class Sprite {
    constructor({position, imageSrc}) {
        this.position = position; 
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        if (!this.image) 
        return
        ctx.drawImage(this.image, this.position.x, this.position.y);
    };

    update() {
        this.draw();
    };
};

//instantiate player with physics
class Player {
    constructor(position) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 100;
        this.width = 100;
    };

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        //stops once player reaches the bottom of the screen
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    };
}



const player = new Player({x: 0, y: 0});

const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
};
const background = new Sprite({
    position: {x: 0, y: 0}, 
    imageSrc: 'graphics/slimeworld_bg1.jpg'
});

//this is a bad way to instantiate a loop. dont do this. 
//im just following along with the tutorial
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.save();
    ctx.scale(2, 2);
    ctx.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    ctx.restore();

    player.update();
    

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 5;
    } else if (keys.a.pressed) {
        player.velocity.x = -5;
    }
};

animate();

//player controls
//this is complicated but i feel like its easier to scope
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //jump
        case 'w': 
            player.velocity.y = -20;
        break;
        //move left
        case 'a': 
            keys.a.pressed = true;
        break;
        //ground pound
        case 's':
            player.velocity.y = 15;
        break;
        //move right
        case 'd': 
            keys.d.pressed = true;
        break;
        
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a': 
            keys.a.pressed = false;
        break;
        case 'd': 
            keys.d.pressed = false;
        break;
        
    }
});

