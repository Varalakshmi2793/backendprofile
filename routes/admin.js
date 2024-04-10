const express=require("express");
const router=express.Router();


router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><label>Product Name</label><input type="text" name="title"><label>Product size</label><input type="number" name="size"><button type="submit">Add</button></form>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;