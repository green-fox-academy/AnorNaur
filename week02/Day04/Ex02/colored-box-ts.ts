'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 150);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 100);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(100, 100);
ctx.stroke();