const express = require("express")
const { loadOSM_data, loadBusLinesData, loadLineTypes, loadBusStop,loadBusLinesData2 } = require("../services/dataLoader")
const map_route = express.Router()


const OSM_data = loadOSM_data()
const busLines_data = loadBusLinesData()
const busLines_data_2 = loadBusLinesData2()
const lineTypes_data = loadLineTypes()
const busStops_data = loadBusStop()


map_route.get("/lines", (req, res) => {
    const lineNames = OSM_data.map((data) => data.line_name)
    res.json(lineNames)
})

map_route.get("/stops/:lineName", (req, res) => {
    const found = OSM_data.find((item) => item.line_name === req.params.lineName);
    if (found) {
        res.json(found.busstops);
    } else {
        res.status(404).json({ message: "Line not found" });
    }
});

map_route.get("/ways/:lineName", (req, res) => {
    const found = OSM_data.find((item) => item.line_name === req.params.lineName);
    if (found) {
        res.json(found.ways);
    } else {
        res.status(404).json({ message: "Line not found" });
    }
});

map_route.get("/busLines", (req, res) => {
    res.json(busLines_data);
});

map_route.get("/busLines/:lineName", (req, res) => {
    const found = busLines_data.find((data) => data.name === req.params.lineName)
    if (found) {
        res.json(found);
    }
    else {
        res.status(404).json({ message: "Line not found" });
    }

});


map_route.get("/busLines2", (req, res) => {
    res.json(busLines_data_2);
});

map_route.get("/busLines2/:lineName", (req, res) => {
    const found = busLines_data_2.find((data) => data.name === req.params.lineName)
    if (found) {
        res.json(found);
    }
    else {
        res.status(404).json({ message: "Line not found" });
    }

});

map_route.get("/lineTypes", (req, res) => {
    res.json(lineTypes_data);
});

map_route.get("/busStops", (req, res) => {
    res.json(busStops_data);
});

module.exports = map_route

