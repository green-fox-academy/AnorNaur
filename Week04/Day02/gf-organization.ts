'use strict'

class Person {
    name: string;
    age: number;
    gender: string;

    introduce(){
        console.log('Hi, I\'m '+this.name + ', a '+this.age+ ' year old ' + this.gender)
    }
    getGoal(){
        console.log('My goal is: Live for the moment!')
    }
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // constructor(name){

    // }
}
class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    getGoal(){
        console.log('Be a junior software developer.')
    }
    introduce(){
        console.log('Hi, I\'m '+this.name+', a '+this.age+' year old '+this.gender+' from '+this.previousOrganization+' who skipped '+this.skippedDays+ ' days from the course already.')
    }
    
    skipDays(numberOfDays){
        this.skippedDays = this.skippedDays + 
    }
}

class mentors extends Person{
    
    level: string;

    getGoal(){
        console.log('Educate brilliant junior software developers.')
    }
    introduce(){
        
    }
}