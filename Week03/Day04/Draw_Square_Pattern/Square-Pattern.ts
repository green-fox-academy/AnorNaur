'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 600;
let w = 200;
let h = 200;

function drawSquare(xPos: number, yPos: number, w: number, h: number){
    ctx.strokeRect(xPos, yPos, w, h);
	ctx.stroke()

}

function drawFractal(xPos: number, yPos: number, w: number, h: number): void{
    if (w > 5) {
        drawFractal(width/4-w/2,height/2-h/2, w, h);
    }
}

drawFractal(width/2-w/2,height/2-h/2, w, h);