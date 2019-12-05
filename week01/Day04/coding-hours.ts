'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long

//total days
let i: number = 17;
i = i * 7;
console.log('total days'); console.log(i); 
//total weekdays
let g: number = 17;
g = g * 2;
console.log('total weekdays'); console.log(g);
// Number of days working
let h: number = i - g;
console.log('total days worked'); console.log(h);
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
let wh: number = h * 6;
console.log('total hours coded'); console.log(wh);
// Print the percentage of the coding hours in the semester if the 
// average work hours weekly is 52
let pc: number = 510/884*100;
console.log('%coding hours in semester'); console.log(pc);