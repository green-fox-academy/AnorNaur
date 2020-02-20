'use strict';
const express = require('express');
const PORT = 3000;
const app = express();
const http = require('http');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit',
  });

let app = http.createServer((req, res) => {
  
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello world!\n');
});

app.listen(PORT, '127.0.0.1');
console.log('Node server running on port 3000');

let post1 = {
    id: 25,
    title: "Dear JavaScript",
    url: "http://9gag.com",
    timestamp: 1494339525,
    score: 791,
}

let post2 ={
    id : 74,
    title: "Crockford",
    url: "http://9gag.com",
    timestamp: 1494138425,
    score: 567,
}
app.get('/application/json', (req, res) => {
    const a1 = {
        posts: [
            {
                
            }
        ]




    };
    res.status(200).send()





})
