'use strict';

let myArray1: number [] = [1, 2, 3];

function addOne1(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] ++;
        
    }
    return array;
}
    
console.log(addOne1(myArray1));