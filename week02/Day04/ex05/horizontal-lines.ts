'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

ctx.strokeStyle = 'green';

function drawsLine(x,y){
    for (let i = 0; i <= 150; i += 50){
        ctx.beginPath();
        ctx.moveTo(x, y+i);
        ctx.lineTo(50, i);
        ctx.stroke();
    }
}

drawsLine(0,0);