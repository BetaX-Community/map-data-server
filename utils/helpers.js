const fs = require("fs");
const path = require("path");

module.exports={
    loadData(filename){
        const dataFolderPath=path.join(__dirname,"..","data")
        const filePath=path.join(dataFolderPath,filename)
        return JSON.parse(fs.readFileSync(filePath,"utf-8"));
    }
}