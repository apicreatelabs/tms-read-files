const filesMiddleware = require('../middlewares/files');
const responseMiddleware = require('../middlewares/response'); 

exports.read = [
    filesMiddleware.verifyFile,
    filesMiddleware.procesData,
    responseMiddleware.responseData
];
