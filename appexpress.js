const http=require("http");
const express=require("express");
const app=express();
app.use((req, res, next)=>{
    console.log("In middleware function");
    next();
});
app.use((req, res, next)=>{
    console.log("In second middleware");
    res.send('<h1>Hello to node JS </h1>');

});
const server=http.createServer(app);
server.listen(4005);