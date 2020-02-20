const express = require('express');
const app = express();


app.get('/groot', (req, res) => {
    // TODO: implement this method
    const someAnswer = {
        received: "somemessage",
        translated: "I am Groot!"
    };
    const noAnswer = {
        error: "I am Groot!"
    };
});

module.exports = app;

