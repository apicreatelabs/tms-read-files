const CSVToJSON = require('csvtojson');

async function readCsv(file){
let data = await CSVToJSON().fromFile(file)
return data;
}

module.exports= {
    read:readCsv
}