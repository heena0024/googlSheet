const { readFileSync } = require("fs")

let loaduser=()=>{
    let users=JSON.parse(readFileSync("sheetData.json"));
   
    return users
}


module.exports={loaduser};