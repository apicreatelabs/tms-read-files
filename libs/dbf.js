const  {DBFFile} =  require('dbffile');
 
async function readFile(file) {
    console.log('aqui');
    try {
        console.log(file);
        let dbf = await DBFFile.open(file);
        let records = await dbf.readRecords(100);
    } catch (error) {
        console.log(e);
    }
    return records;
}


module.exports = {
    read: readFile
 }
 