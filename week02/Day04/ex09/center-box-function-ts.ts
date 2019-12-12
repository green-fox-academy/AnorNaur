'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(xPos: number, yPos: number, size: number, color: string){
    for (let i = 0; i <= 150; i += 50){
        ctx.strokeStyle = color;
        ctx.strokeRect(xPos-i, yPos-i, i*2, i*2);
    }
}
drawSquare(width/2, height/2, 0, 'black');

// ctx.strokeStyle = 'blue';
// ctx.strokeRect(260, 160, 50, 50);

// ctx.strokeStyle = 'blue';
// ctx.strokeRect(240, 140, 80, 80);