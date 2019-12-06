'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let i: number = 0 
let Fizz: string = "Fizz";
let Buzz: string = "Buzz";
let FizzBuzz: string = "FizzBuzz";

for (i = 0; i < 100; i++){    
    console.log(i)
        if (i % 3 === 0){
            console.log(Fizz) 
                if (i % 5 === 0){
                    console.log(Buzz)
                        if (i % 3 === 0 && i % 5 === 0){
                            console.log(FizzBuzz)
            }
        }  
    }
  }
  
// while (ii < 100){
//     ii++;
//     console.log(ii);
// } 
//for (ii % 3 === 0){
//     console.log(Fizz)
// }