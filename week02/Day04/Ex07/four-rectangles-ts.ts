'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const width: number = 600;
const height: number = 400;
// Draw four different size and color rectangles.
// Avoid code duplication.



function drawRect(xPos: number, yPos: number, size: number, color: string){
    for (let i = 0; i < 200; i += 50){
        ctx.strokeStyle = color;
        ctx.strokeRect(xPos+i, yPos+i, size, size);
        if (i === 0) {
            color = 'red';
        } else if (i === 50){
            color = 'yellow';
        } else if (i === 100){
            color = 'green';
    }
}
}

drawRect(10, 10, 10, 'blue');