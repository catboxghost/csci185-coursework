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
    constructor({position, imageSrc, frameRate = 1}) {
        this.position = position; 
        this.image = new Image();
        this.image.onload = () => {
            this.width = this.image.width / this.frameRate;
            this.height = this.image.height;
        };
        this.image.src = imageSrc;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.frameBuffer = 6;
        this.elapsedFrames = 0;
    }

    draw() {
        if (!this.image) 
        return

        const cropbox = {
            position: {
                x: this.currentFrame * (this.image.width / this.frameRate),
                y:0
            },
            width: this.image.width / this.frameRate,
            height: this.image.height,
        }

        ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, 
            cropbox.width, cropbox.height, this.position.x, this.position.y,
            this.width, this.height);
    };

    update() {
        this.draw();
        this.updateFrames()
    };
    updateFrames() {
        this.elapsedFrames++;

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) 
            { this.currentFrame++ } else { this.currentFrame = 0 };
    };
    };
};

//instantiate player with physics
class Player extends Sprite {
    constructor({position, collisionBlocks, platformCollisionBlocks, imageSrc, frameRate, animations}) {
        super({imageSrc, frameRate});
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.collisionBlocks = collisionBlocks;
        this.hitbox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 20,
            height: 28,
        }

        this.platformCollisionBlocks = platformCollisionBlocks;
        this.hitbox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 20,
            height: 28,
        }

        this.animations = animations;
        for (let key in this.animations) {
            const image = new Image();
            image.src = this.animations[key].imageSrc
            this.animations[key].image = image
        };
    };

    switchSprite(key) {
        if (this.image === this.animations[key].image) return
        this.image = this.animations[key].image
    }

    update() {
        this.updateFrames();
        this.updateHitbox();

        //ctx.fillStyle = 'rgba(255, 0, 0, 0.4';
        //ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);

        this.draw();
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();
        this.checkForVerticalCollisions();
    };


    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 3,
                y: this.position.y + 6,
            },
            width: 24,
            height: 20,
        }
    }

    checkForHorizontalCollisions() { 
        for(let idx = 0; idx < collisionBlocks.length; idx++) {
            const collisionBlock = this.collisionBlocks[idx];

            if (collisions({
                object1: this.hitbox,
                object2: collisionBlock,
            })) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                    this.position.x = collisionBlock.position.x - offset - 0.01;
                    break;
                };

                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    const offset = this.hitbox.position.x - this.position.x;
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                    break;
                };
            };
        };
    };
//im so tired
    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
    };

    checkForVerticalCollisions() { 
        for(let idx = 0; idx < collisionBlocks.length; idx++) {
            const collisionBlock = this.collisionBlocks[idx];

            if (collisions({
                object1: this.hitbox,
                object2: collisionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
                    this.position.y = collisionBlock.position.y - offset - 0.01;
                    break;
                };

                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
                    break;
                };
            };
        };

        for(let idx = 0; idx < platformCollisionBlocks.length; idx++) {
            const platformCollisionBlock = this.platformCollisionBlocks[idx];

            if (collisions({
                object1: this.hitbox,
                object2: platformCollisionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
                    this.position.y = platformCollisionBlock.position.y - offset - 0.01;
                    break;
                };

                
            };
        };
    };
};

class CollisionBlock {
    constructor({position, height = 20}) {
        this.position = position; 
        this.height = height;
        this.width = 40;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'
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
            },
            height: 5
        })) 
        }
    })
})


//*********************************************************************
//*                     implementations                               *
//*********************************************************************

const player = new Player(
    {position: 
        {x: 80, y: 240},
        collisionBlocks: collisionBlocks,
        platformCollisionBlocks: platformCollisionBlocks,
        imageSrc: 'graphics/slimeboy/slimeboy_idle.png',
        frameRate: 9,
        animations: {
            idle: {
                imageSrc: 'graphics/slimeboy/slimeboy_idle.png',
                frameRate: 9,
                framebuffer: 6,},
            moveright: {
                imageSrc: 'graphics/slimeboy/slimeboy_moveright.png',
                frameRate: 6,
                frameBuffer: 6},
            moveleft: {
                imageSrc: 'graphics/slimeboy/slimeboy_moveleft.png',
                frameRate: 6,
                frameBuffer: 6},
        }
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
        player.switchSprite('moveright');
        player.velocity.x = 4;
    } else if (keys.a.pressed) {
        player.switchSprite('moveleft');
        player.velocity.x = -4;
    } else if (player.velocity.y === 0) {
        player.switchSprite('idle');
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

