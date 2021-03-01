const express = require("express");
const router = express.Router();

const readFiles =  require('../libs/readfiles')


router.get("/", (req,res) =>{
    res.json(readFiles.read('./files/test.xls'))
});

module.exports = router;