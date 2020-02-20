'use strict';
class Animal{
    hunger: number;
    thirst: number;

constructor(hunger: number, thirst: number){
    this.hunger = hunger;
    this.thirst = thirst;
    }

    get eat(): number {
        return this.hunger -= 1;
    }
    get drink(): number {
        return this.thirst -= 1;
    }
    get play(): number {
        return this.thirst += 1, this.hunger += 1;
    }
    
}
let cheetah = new Animal(50,50);
console.log(cheetah.play);
console.log(cheetah.drink, cheetah.eat);
console.log(cheetah);
