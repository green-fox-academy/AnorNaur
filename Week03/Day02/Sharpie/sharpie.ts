'use strict';
class Sharpie {
    colour: string;
    width: number;
    inkAmount: number;
constructor(colour: string, width: number){
    this.colour = colour;
    this.width = width;
    this.inkAmount = 100;
    }
    get use(): number {
        return this.inkAmount -= 1;
    }
}

let myFirstSharpie = new Sharpie('blue', 10);
console.log(myFirstSharpie.use);
console.log(myFirstSharpie);