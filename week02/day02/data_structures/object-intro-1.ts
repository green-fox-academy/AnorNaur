// let myObject = {
let myObject = {
97:	'a',
98:	'b',
99:	'c',
65:	'A',
66:	'B',
67:	'C',
};
console.log('//Keys');
console.log(Object.keys(myObject));
console.log(' ');
// console.log(Object.values(myObject));
console.log(myObject);

myObject[68] = 'D';
// console.log(Object.keys(myObject));
console.log(myObject);
 for (let i in myObject) {
     console.log(myObject[i]);
 }
