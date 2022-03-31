// this code is make sheet on  local machine

var json2xls = require('json2xls');
const fs = require("fs")//npm install fs
const data =  require("./sheetData.json");

var json = data;
var xls = json2xls(json);

fs.writeFileSync('data.xlsx', xls, 'binary'); 

