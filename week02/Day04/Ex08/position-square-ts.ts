'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(xPos: number, yPos: number, size: number, color: string){
    for (let i = 0; i < 150; i += 50){
        ctx.fillStyle = color;
        ctx.fillRect(xPos+i, yPos+i, size, size);
    }
}

    drawSquare(0, 0, 50, 'black');