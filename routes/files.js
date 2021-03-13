const express = require("express");
const router = express.Router();

const controller =  require('../controllers/files');

router.post("/read",controller.read);


// router.post('/', async(req, res)=> {
//   let  data
//   let type  = req.body.type

//   switch (type) {
//     case 'excel':
//       data = readFiles.reqFile(req.files.data);
//       res.json(data);
//     break;
//     case 'dbf':
//       data = await readFilesDBF.read(req.files.data.tempFilePath)
//       res.json(data);
//     break
//   }
//     res.status(400).json("Register Type"); 
// });


module.exports = router;