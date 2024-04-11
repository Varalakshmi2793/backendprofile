const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("message form");
    const username = req.query.username; 
    res.send(`
        <h2>${username}:</h2>
        <div id="messages">${message}</div>
        <form id="messageForm" action="/message" method="POST">
            <input type="text" name="message">
            <input type="hidden" name="username" value="${username}">
            <button type="submit">Send</button>
        </form>`);
});

router.post('/message', (req, res, next) => {
    const username = req.body.username;
    const message = req.body.message;
    
    res.redirect('/');
});

module.exports = router;
