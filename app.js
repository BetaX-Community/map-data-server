var express = require("express");
var app = express();
require("dotenv").config();

const PORT=process.env.PORT || 2999;


var OSM_data = require('./data/antananarivo.json'); // from router/build
var busLines_data = JSON.parse(require('./data/busLines.json')); // from parsers
var busLines_data_2 = JSON.parse(require('./data/busLines-2.json')); // from parsers
var lineTypes_data = JSON.parse(require('./data/lineTypes.json')); // from parsers
var busStops_data = JSON.parse(require('./data/busStops.json')); // from parsers

lineNames = []
for(var i=0; i < OSM_data.length; i++) {
    lineNames.push(OSM_data[i]['line_name']);
}

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

app.get("/busStops", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(busStops_data);
});


app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});