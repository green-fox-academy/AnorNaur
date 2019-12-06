'use strict';

let number: number = 15;
let multiplier: number = 0
let result: number = 0

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

while (multiplier < 10){
    multiplier = multiplier + 1
    result = number * multiplier
    console.log(multiplier); console.log("*"); console.log(number); console.log("="); console.log(result); console.log(" ")
}

