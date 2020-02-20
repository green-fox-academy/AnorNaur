'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const width: number = 500;
const height: number = 500;

ctx.beginPath();
ctx.arc(0, 0, 250, 0, Math.PI * 2, anticlockwise?: false);
ctx.stroke();

ctx.beginPath();
ctx.arc(0, 500, 250, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 0, 250, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 500, 250, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.stroke();

// ctx.beginPath();
// ctx.arc(250, 500, 250, 0, Math.PI * 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(250, 0);
// ctx.quadraticCurveTo(250, 250, 280, 250);
// ctx.stroke();

//function drawArch(m,)