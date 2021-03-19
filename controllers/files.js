const filesMiddleware = require('../middlewares/files');
const responseMiddleware = require('../middlewares/response'); 
const dataBaseMiddleware =  require('../middlewares/database');

exports.read = [
    filesMiddleware.verifyFile,
    filesMiddleware.procesData,
    responseMiddleware.responseData
];

exports.saveFileDatabase =[
    filesMiddleware.verifyFile,
    filesMiddleware.procesData,
    dataBaseMiddleware.multiSave,
    responseMiddleware.responseData
];
