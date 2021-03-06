const reader = require('xlsx');
const router = require('../routes/files');
const fileRoute = './files/test.xls';

console.log(fileRoute);
function readFiles(route) {
   const file = reader.readFile(route)
   const sheets = file.SheetNames;
   let data = []
   try {
      for (let i = 0; i < sheets.length; i++) {
         const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
         temp.forEach((res) => {
            data.push(res)
         })
      }  
   } catch (error) {
      console.log(error);
   }

   return data, true;
}

function reqFile(dataFile){
   console.log(dataFile);
      const file = reader.readFile(dataFile.tempFilePath)
   
      const sheets = file.SheetNames;
      let data = []
   try {
      for (let i = 0; i < sheets.length; i++) {
         const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
         temp.forEach((res) => {
            data.push(res)
         })
      }
   } catch (error) {
      console.log(error);
   }
      return data;
}



module.exports = {
   read: readFiles,
   reqFile
}
