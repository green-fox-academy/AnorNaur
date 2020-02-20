'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
      title: 'Hello World'
    });