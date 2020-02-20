'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 600;

function drawCircle(posX: number, posY: number, radius: number) {
	ctx.beginPath();
	ctx.arc(posX, posY, radius, 0, Math.PI * 2);
    ctx.stroke();
}

function drawFractal(posX: number, posY: number, radius: number): void {
	drawCircle(posX, posY, radius);
	if(radius > 5) {
		drawFractal(posX/2, posY/2 - radius, radius / 2);
	}
}

drawCircle(width / 2, height / 2, 250);