// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

   
// var text = fs.readFileSync().toString();
// var lines = text.split('\n');
// var newlines_count = lines.length - 1;
// console.log(newlines_count);

function takeFile(filePath) {
    console.log(filePath)
//     try { 
//         let fileContent = fs.readFileSync(filePath, 'utf-8');
// } catch (e) {
//     console.log(0);
// }    
}

takeFile('./file.txt');