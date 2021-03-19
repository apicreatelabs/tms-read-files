const express = require("express");
const router = express.Router();

const controller =  require('../controllers/files');

router.post('/read',controller.read);
router.post('/save',controller.saveFileDatabase);

module.exports = router;



// MongoClient.connect(process.env.URL_DATABASE,{ useUnifiedTopology:true })
// .then(client => {
//   const db = client.db(process.env.DATABASE)
//   const quotesCollection = db.collection('prueba')
  
//   app.post('/save', (req, res) => {
//     quotesCollection.insertMany(req.body)
//       .then(result => {
//         console.log(result)
//       })
//       .catch(error => console.error(error))
//   })

// })
// .catch(console.error)