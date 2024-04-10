const express=require("express");

const router=express.Router();

router.get('/', (req, res, next) => {
    console.log("In the Middleware");
    res.send('<h1>Welcome to home page</h1>');
});

module.exports=router;
