const express = require('express');
const router=express.Router();
const path=require('path');
router.use('/',(req,res,next)=>{
    //res.render('yanlısGiris.html');
    res.sendFile(path.join(__dirname,'../','views','yanlısGiris.html'));

   
  
});

module.exports=router;