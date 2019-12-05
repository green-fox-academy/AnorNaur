'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let heightInM2: number = heightInM ** 2;
console.log(heightInM2);

// Print the Body mass index (BMI) based on these values
let BMI: number = massInKg / heightInM2;
console.log(BMI);