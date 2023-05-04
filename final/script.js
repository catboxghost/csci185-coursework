// i am never working on a game project by myself again

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
class Player extends Sprite {
    constructor({position, collisionBlocks, imageSrc}) {
        super({});
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 50;
        this.width = 50;
        this.collisionBlocks = collisionBlocks;
    };

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
    };

    checkForHorizontalCollisions() { 
        for(let idx = 0; idx < collisionBlocks.length; idx++) {
            const collisionBlock = this.collisionBlocks[idx];

            if (collisions({
                object1: this,
                object2: collisionBlock,
            })) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.position.x - this.width - 0.01;
                    break;
                };

                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                    break;
                };
            };
        };
    };

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
    };

    checkForVerticalCollisions() { 
        for(let idx = 0; idx < collisionBlocks.length; idx++) {
            const collisionBlock = this.collisionBlocks[idx];

            if (collisions({
                object1: this,
                object2: collisionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y - this.height - 0.01;
                    break;
                };

                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01;
                    break;
                };
            };
        };
    };
};

class CollisionBlock {
    constructor({position}) {
        this.position = position; 
        this.height = 40;
        this.width = 40;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    };

    update() {
        this.draw();
    };
};



const floorCollisions2D = [];
for (let idx = 0; idx < floorCollisions.length; idx += 26) {
    floorCollisions2D.push(floorCollisions.slice(idx, idx + 26))
}

const collisionBlocks = [];
floorCollisions2D.forEach((row, y) => {
row.forEach((symbol, x) => {
        if (symbol === 12) {
            collisionBlocks.push(new CollisionBlock({position: {
                x: x * 40,
                y: y * 40
            }})) // <- look at all these brackets. ridiculous
        }
    })
})

const platformCollisions2D = [];
for (let idx = 0; idx < platformCollisions.length; idx += 26) {
    platformCollisions2D.push(platformCollisions.slice(idx, idx + 26))
}

const platformCollisionBlocks = [];
platformCollisions2D.forEach((row, y) => {
row.forEach((symbol, x) => {
        if (symbol === 156) {
            platformCollisionBlocks.push(new CollisionBlock({position: {
                x: x * 40,
                y: y * 40
            }})) 
        }
    })
})


//*********************************************************************
//*                     implementations                               *
//*********************************************************************

const player = new Player(
    {position: 
        {x: 80, y: 240},
        collisionBlocks: collisionBlocks
});

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
    imageSrc: 'graphics/zone1.png'
});

//this is a bad way to instantiate a loop. dont do this. 
//im just following along with the tutorial
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    background.update();

    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.update();
    });

    platformCollisionBlocks.forEach(block => {
        block.update();
    });

    player.update();
    

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 4;
    } else if (keys.a.pressed) {
        player.velocity.x = -4;
    }
};

animate();

//player controls
//this is complicated but i feel like its easier to scope
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //jump
        case 'w': 
            player.velocity.y = -12;
        break;
        //move left
        case 'a': 
            keys.a.pressed = true;
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

