'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loginform.html');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userData = { username: username, password: password };
    const body = JSON.stringify(userData);
    if (username) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (e) => {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            callback(response);
          }
        }
    }
});

app.listen(3000, () => console.log('listening'));