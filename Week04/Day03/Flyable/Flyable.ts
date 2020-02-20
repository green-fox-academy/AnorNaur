'use strict'
interface Flyable{
    bármi: number;
    land();
    fly(km: number);
    takeOff();
}

class Vehicle implements Flyable{
    bármi: number = 5;
    fuelLevel: number;
    speed: number;
    weight: number;

    constructor(){
        this.fuelLevel = 100;
    }
    land(){
        this.fuelLevel = this.weight / 20
    }
    fly(km: number){
        this.fuelLevel -= km*2
    }
    takeOff(){
        this.fuelLevel -=  this.weight / 10
    }
}

class Helicopter extends Vehicle implements Flyable{
    constructor(speed: number, weight: number){
        super ()
    }
}

let Chinook = new Helicopter(30, 100);

console.log(Chinook);
Chinook.takeOff();
console.log(Chinook);
Chinook.fly(30);
console.log(Chinook);
Chinook.land();
console.log(Chinook);
