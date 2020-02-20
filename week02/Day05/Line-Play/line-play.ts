'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const width: number = 500;
const height: number = 500;

function drawLine(x, y){
    for (let i = 0; i <= 450; i+100){
        ctx.beginPath();
        ctx.moveTo(height, y+i);
        ctx.lineTo(x+1, width);
        ctx.stroke();
    }
}

drawLine(0,0)