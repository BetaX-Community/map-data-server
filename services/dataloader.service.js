const { loadData } = require("../utils/helpers");

module.exports={
    loadOSM_data:()=> loadData("antananarivo.json"),
    loadBusLinesData:() =>loadData("busLines.json"),
    loadBusLinesData2:() =>loadData("busLines-2.json"),
    loadLineTypes:() =>loadData("lineTypes.json"),
    loadBusStop:()=>loadData("busStops.json")
}