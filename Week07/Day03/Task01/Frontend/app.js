'use strict';

const express = require('express');
const PORT = 8000;
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
  });

app.get('/doubling', (req, res) => {
    const answer = {
        received: req.query.input*1,
        result: req.query.input*2,
    }
    const error = {
        error : "Please provide an input!"
    } 
    if (req.query.input){
        res.send(answer);
    } else {
        res.send(error);
    }
});

app.get('/greeter', (req,res) => {
    const greetings = {
        welcome_message: "Oh, hi there " + req.query.name + ", my dear " + req.query.title +"!"
    }
    const missingBoth = {
        error: "Please provide a name and a title!"
    };
    const missingName = {
        error: "Please provide a name!"
    };
    const missingTitle = {
        error: "Please provide a title!"
    };

    if(req.query.name && req.query.title){
    res.send(greetings);
    } else if (req.query.name === undefined && req.query.title){
        res.status(400).send(missingName);
    } else if (req.query.name && req.query.title === undefined){
        res.status(400).send(missingTitle);
    } else {
       res.status(400).send(missingBoth);
    }
})

app.get('/appenda/:appendable', (req,res) => {
    const appendThis = 'a';
    const message = {
        "appended": req.params + appendThis
    }
    res.send(message)
});