'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const width: number = 600;
const height: number = 400;
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 150);
ctx.lineTo(300, 250);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.moveTo(250, 200);
ctx.lineTo(350, 200);
ctx.stroke();


