const canvas = document.getElementById('canvas1');
const dropdown = document.getElementById('animations');
canvas.style.border="1px solid black";
const ctx = canvas.getContext('2d');
const spriteAnimations = [];
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let staggerFrames = 5;

class Animation {
    constructor(name,frameX, frameY, frames, frameRate) {
        this.name = name;
        this.frameX = frameX;
        this.frameY = frameY;
        this.frames = frames; 
        this.frameRate = frameRate;
        this.positions = this.getPositions();
    }

    getPositions() {
        const final_positions = []
        for (let i = 0; i < this.frames; i++) {
            let pos = {
                x: spriteWidth * i,
                y: spriteHeight * i
            }
            final_positions.push(pos);
        }
        return final_positions;
    }
}
const idle = new Animation("idle", 0,0, 7, 13);
const run = new Animation("run",0,3,8,10);
const sit = new Animation("sit",0,5,5,15);
const stunned = new Animation("stunned", 0,4,11,12)

let animation = idle;


const playerImage = new Image();
playerImage.src = "shadow_dog.png";

// let frame = 0;
// console.log(pos)
const animate = () => {
    ctx.fillStyle='#FFF';
    
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/animation.frameRate) % animation.frames;
    animation.frameX = spriteWidth * position;
    // let pos = animation.positions[frame]
    // animation.frameY = spriteHeight * position
    // console.log(frame)
    x= 0;
    ctx.fillRect(50,50, CANVAS_WIDTH,CANVAS_HEIGHT);
    // console.log(animation.frameX);
    ctx.drawImage(playerImage, animation.frameX , animation.frameY * spriteHeight,spriteWidth, spriteHeight,0,0, spriteWidth, spriteHeight);

    gameFrame++
    // console.log("Frame:",gameFrame)
    x++
    requestAnimationFrame(animate);
}



function playIdle(){
    animation = idle;
    console.log(animation.positions);
}

const playJumpUp = () => {
    frameX = 0;
    frameY = 1;


}

// Must use <es6 syntax to appear in the window object

function playRun() {
    animation = run;

}

function playSit(){
    animation = sit;
}

function playStunned() {
    animation = stunned;
}

const test = (e) => {
    console.log(e.target.value)
    window[e.target.value]()
} 

// console.log(window)
animate();
// playSit();
// playRun();
// playIdle();
// playJumpUp();
