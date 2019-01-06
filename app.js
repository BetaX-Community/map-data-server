var express = require("express");
var app = express();

var OSM_data = require('../router/build/antananarivo.json');
var busLines_data = JSON.parse(require('../parsers/busLines.json'));
var busLines_data_2 = JSON.parse(require('../parsers/busLines-2.json'));
var lineTypes_data = JSON.parse(require('../parsers/lineTypes.json'));

lineNames = []
for(var i=0; i < OSM_data.length; i++) {
    lineNames.push(OSM_data[i]['line_name']);
}

app.listen(2999, () => {
    console.log("Server running on port 2999");
});

app.get("/lines", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(lineNames);
});

app.get("/stops/:lineName", (req, res, next) => {
    var found = OSM_data.find(function(element) {
	return element['line_name'] == req.params.lineName;
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.json(found['busstops']);
});

app.get("/ways/:lineName", (req, res, next) => {
    var found = OSM_data.find(function(element) {
	return element['line_name'] == req.params.lineName;
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.json(found['ways']);
});

app.get("/busLines", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(busLines_data);
});

app.get("/busLines/:lineName", (req, res, next) => {
    var found = busLines_data.find(function(element) {
	return element['name'] == req.params.lineName;
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.json(found);
});

app.get("/busLines2", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(busLines_data_2);
});

app.get("/busLines2/:lineName", (req, res, next) => {
    var found = busLines_data_2.find(function(element) {
	return element['name'] == req.params.lineName;
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.json(found);
});

app.get("/lineTypes", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(lineTypes_data);
});
