'use strict'

class Plant {
    waterLevel: number;
    maxH2O: number;
    thirst: number;
    name: string;

    constructor (maxH2O: number, thirst: number, name: string){
        this.maxH2O = maxH2O;
        this.waterLevel = Math.floor(Math.random() * 10);
        this.thirst = thirst;
        this.name = name;
    }

    isThirsty(): string {
        if (this.waterLevel < this.thirst) {
            return ('This '+this.name +' needs water')
        } else {
            return ('This '+this.name +' does not need water')
        }
    }

}

class Flower extends Plant {
    constructor(){
        super(10, 5, 'Flower')
    }
    
}
