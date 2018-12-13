var express = require("express");
var app = express();

var parsedJSON = require('../router/build/antananarivo.json');
arr = []
for(var i=0; i < parsedJSON.length; i++) {
    arr.push(parsedJSON[i]['line_name']);
}

app.listen(2999, () => {
    console.log("Server running on port 2999");
});

app.get("/lines", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(arr);
});

app.get("/stops/:lineName", (req, res, next) => {
    var found = parsedJSON.find(function(element) {
	return element['line_name'] == req.params.lineName;
    });
    res.json(found['busstops']);
});

app.get("/ways/:lineName", (req, res, next) => {
    var found = parsedJSON.find(function(element) {
	return element['line_name'] == req.params.lineName;
    });
    res.json(found['ways']);
});
