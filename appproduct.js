const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const adminrouter=require('./routes/admin');
const shoprouter=require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin',adminrouter);
app.use(shoprouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


app.listen(3077);
