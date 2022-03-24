const _readData = require('read-excel-file/node');
const fs = require('fs');
// console.log('Hello')


const map ={
  'Name': 'Name',
  'Sport' : 'Sport',
  'Nationality' : 'Nationality',
  'Age' : 'Age'
}

function excelJson(){
  let _filePath = 'PlayerData.xlsx';
  _readData(_filePath, {map}).then(({ rows }) => {

  fs.writeFile('myJson.json', JSON.stringify(rows, null,4), function(_err){

    if (_err){
      console.log("Error: ", _err)
    }else{
      console.log("Saved!");
    }
  });
});
}
excelJson();
