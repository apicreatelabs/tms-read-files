const  {DBFFile} =  require('dbffile');
 
async function readFile(file) {
    console.log('aqui');
    console.log(file);
    let dbf = await DBFFile.open(file);
    let records = await dbf.readRecords(100);
    return records;
}


module.exports = {
    read: readFile
 }
 