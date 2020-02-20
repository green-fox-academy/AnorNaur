'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawSquares(xPos: number, yPos: number, size: number,){
    for (let i = 0; i < 200; i += 10){
        ctx.fillStyle = 'black';
        ctx.fillRect(xPos+i, yPos+i, size, size);
        ctx.fillStyle = 'purple';
        ctx.fillRect(xPos+i, yPos+i, size, size);
    }
}

    drawSquares(0, 0, 10,);

    // rgb(255, 255, 255)