'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
// console.log(reversed);
let letters = reversed.split('');
console.log(letters);

let result: string = '';
for (let i: number = 1; i <= letters.length; i++) {
    console.log(letters[letters.length -i]);
    result += letters[letters.length -i];
}
console.log(result);
