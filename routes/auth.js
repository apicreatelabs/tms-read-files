const express = require("express");
const router = express.Router();

const controller =  require('../controllers/files');

router.post('/read',controller.read);
router.post('/save',controller.saveFileDatabase);

module.exports = router;