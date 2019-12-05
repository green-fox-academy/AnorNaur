'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
let l: number = 10;
console.log("length"); console.log(l);
let w: number = 10;
console.log("width"); console.log(w);
let h: number = 10;
console.log("heigth"); console.log(h);

let SurfaceArea: number = 2*l*w + 2*l*h + 2*h*w;
console.log("Surface Area"); console.log(SurfaceArea);
let Volume: number = l*w*h;
console.log("Volume"); console.log(Volume);
// The program should write the surface area and volume of the cuboid like:

// Surface Area: 600
// Volume: 1000
// var SurfaceArea: number = 600
// var Volume: number = 1000