let myList: string[] = [];
console.log('//Element number while empty');
console.log(myList.length);

myList.push('William');
console.log('//Added William');

let empty: boolean = true;
if (myList.length < 1) {
    empty = true;
}   else {
    empty = false;    
}
console.log('//Empty boolean');
console.log(empty);

myList.push('John');
myList.push('Amanda');
console.log('//Element number with aditional two names');
console.log(myList.length);
console.log('//Third Element');
console.log(myList[2]);
console.log('//List format');
console.log(myList[0] + '\n' + myList[1] + '\n' + myList[2]);
// myList.forEach(element => console.log(element));
console.log('//Numbered list');

for (let i: number = 0; i < myList.length ; i++){
    console.log(i+1 + '. ' + myList[i]); 
    
} 
myList.forEach(function(element,i){
    console.log(i+1 + '. ' + element);
});

myList.splice(1,1);
console.log('//Removed John');
// myList.forEach(element => console.log(element));
console.log('//Reversed list');
console.log(myList[1] + '\n' + myList[0]);