const express = require("express");
const router = express.Router();

router.get('/login', (req, res, next) => {
    console.log("login form");
    res.send('<form action="/" method="POST"><label>username</label><input type="text" name="username"><button type="submit">Submit</button></form>');
});

router.post('/', (req, res, next) => {
    const username = req.body.username;
    console.log(username);

    
    res.send(`<script>window.localStorage.setItem('username', '${username}');</script>`);


    res.redirect('/');
});

module.exports = router;
