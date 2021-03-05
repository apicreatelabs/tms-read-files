const express = require("express");
const router = express.Router();
const readFiles =  require('../libs/readfiles')


router.get("/", (req,res) =>{
    res.json(readFiles.read('./files/test.xls'))
});



router.post('/config', (req, res)=> {
    
  });


router.post('/excel', (req, res)=> {
  if(req.files.data.mimetype === 'application/vnd.ms-excel' || req.files.data.mimetype === "sdsds"){
    let  data = readFiles.reqFile(req.files.data);
    res.json(data);
  }
  else{
    res.status(400).json('format incorect');
  } 
});

module.exports = router;