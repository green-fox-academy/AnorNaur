let fs = require('fs');

var contents = fs.readFileSync('file.txt');
var lines = contents.length;
console.log(lines);