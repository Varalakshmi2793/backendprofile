const http=require("http");
const express=require("express");
const app=express();
app.use((req, res, next)=>{
    console.log("In middleware function");
    next();
});
app.use((req, res, next)=>{
    console.log("In second middleware");
    res.send({message: "Welcome to Node JS"});

});
app.listen(3000);
