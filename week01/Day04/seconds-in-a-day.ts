'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let totalHours: number = 23;
let totalMinutes: number = 59;
let totalSeconds: number = 60;
let remainingSeconds: number = totalSeconds - currentSeconds;
console.log("rem sec"); console.log(remainingSeconds);
let remainingMinutes: number = totalMinutes - currentMinutes;
console.log("rem min"); console.log(remainingMinutes);
let remainingHours: number = totalHours - currentHours;
console.log("rem hours"); console.log(remainingHours);
let totalremainigSeconds: number = remainingHours * 60 * 60 + remainingMinutes * 60 + remainingSeconds;
console.log("total remainig seconds"); console.log(totalremainigSeconds);