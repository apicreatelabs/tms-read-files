const express = require("express");
const router = express.Router();
const readFiles =  require('../libs/readfiles')


router.get("/", (req,res) =>{
    res.json(readFiles.read('./files/test.xls'))
});

router.post('/upload', (req, res)=> {

    let  data = readFiles.reqFile(req.files.name);
    res.json(data);
  });
  

module.exports = router;