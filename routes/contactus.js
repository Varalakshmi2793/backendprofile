const path=require('path')
const express=require('express');
const rootdir=require('../pathdir/path');
const router=express.Router()


router.get('/contactus', (req,res)=>{
    res.sendFile(path.join(rootdir, '..', 'views','contact.html'))
});


module.exports=router;