'use strict'
let askForDrink: any = 'Pour me anudder!';

class Pirate {
    drunkLevel: number;
constructor(){
    this.drunkLevel = 0;
}
    drinkSomeRum(){
        this.drunkLevel += 1;
    }
    howsItGoingMate(){
        if (this.drunkLevel >= 1){
            return (askForDrink * Math.floor(Math.random() * 5))
        } else { 
            return ('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
            this.drunkLevel -= this.drunkLevel;
        }
    }
}
let BlackBeard = new Pirate;
console.log(BlackBeard);
BlackBeard.drinkSomeRum;
BlackBeard.drinkSomeRum;
console.log(BlackBeard);