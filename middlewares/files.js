const libFile = require('../libs/files');
const libDbf = require('../libs/dbf');
const libEcxel = require('../libs/ecxel');
const libCsv = require('../libs/csv');

async function verifyFile(req, res, next) {
    req.objects = {}
    req.objects.type = libFile.verfifyFile(req.files.data.mimetype)
    next()
}

async function procesData(req, res, next) {
    console.log("tipo",req.objects.type)
    try {
        switch (req.objects.type) {
            case "DBF":
            case "OCTET-STREAM":
                console.log('dbf');
                req.objects.response = 200
                req.objects.data = await libDbf.read(req.files.data.tempFilePath)
                break;
            case "MS-EXCEL" : 
            case'OPENXMLFORMATS-OFFICEDOCUMENT':
                console.log('aqui');
                req.objects.response = 200
                req.objects.data = libEcxel.read(req.files.data.tempFilePath);
                break
            case "CSV":
                req.objects.response = 200
                req.objects.data = await libCsv.read(req.files.data.tempFilePath);
                break
            default:
                req.objects.response = 400
                break;
        }
    } catch (error) {
        console.log(e);
    }
    next()
}

module.exports = {
    verifyFile,
    procesData
}