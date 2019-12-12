
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

ctx.strokeStyle = 'green';

function drawsLine(x,y){
    for (let i = 0; i < 300; i += 100){
        ctx.beginPath();
        ctx.moveTo(x+i, y);
        ctx.lineTo(width/2, height/2);
        ctx.stroke();
    }
}

drawsLine(0,0);
