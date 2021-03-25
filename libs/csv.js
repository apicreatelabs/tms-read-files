const CSVToJSON = require('csvtojson');

async function readCsv(file){
    try {
        let data = await CSVToJSON().fromFile(file)
    } catch (error) {
        console.log(error);
        return false;
    }
return data, true;
}

module.exports= {
    read:readCsv
}