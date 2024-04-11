// app.js

const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/login', (req, res) => {
    res.send('<form action="/message" method="post"><label>Username:</label><input type="text" name="username"><button type="submit">Login</button></form>');
});


app.post('/message', (req, res) => {
    const username = req.body.username;

    res.send(`<script>window.localStorage.setItem('username', '${username}');</script>`);

  
    res.redirect('/');
});


app.get('/', (req, res) => {

    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
            data = "No messages";
        }
        res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username');">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button>
            </form>`); });
});


app.post('/send-message', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;

  
    fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
        if (err) {
            console.error(err);
        }
    });

    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
