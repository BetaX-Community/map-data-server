const fs = require("fs");
const path = require("path");

function jsonParser(blob) {
  let parsed = JSON.parse(blob);
  if (typeof parsed === 'string') parsed = jsonParser(parsed);
  return parsed;
}

module.exports={
  loadData(filename){
    const dataFolderPath = path.join(__dirname,"..","data")
    const filePath = path.join(dataFolderPath,filename)
    return jsonParser(fs.readFileSync(filePath,"utf-8"));
  }
}
