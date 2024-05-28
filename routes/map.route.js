const express = require("express")
const { loadOSM_data, loadBusLinesData, loadLineTypes, loadBusStop,loadBusLinesData2 } = require("../services/dataloader.service")
const map_route = express.Router()


const OSM_data = loadOSM_data()
const busLines_data = loadBusLinesData()
const busLines_data_2 = loadBusLinesData2()
const lineTypes_data = loadLineTypes()
const busStops_data = loadBusStop()

/**
 * @swagger
 * /api/lines:
 *   get:
 *     summary: Get all lines.
 *     description: Get all lines.
 *     responses:
 *       200:
 *         description: Fetched all lines
 */
map_route.get("/lines", (req, res) => {
    const lineNames = OSM_data.map((data) => data.line_name)
    res.json(lineNames)
})

/**
 * @swagger
 * /api/stops/{lineName}:
 *   get:
 *     summary: Get stops for a particular line.
 *     description: Get stops for a particular line.
 *     parameters:
 *        - in: path
 *          name: lineName
 *          required: true
 *          type: string
 *          description: name of the specific line
 *     responses:
 *       200:
 *         description: Fetched all stops for a particular line.
 */
map_route.get("/stops/:lineName", (req, res) => {
    const found = OSM_data.find((item) => item.line_name === req.params.lineName);
    if (found) {
        res.json(found.busstops);
    } else {
        res.status(404).json({ message: "Line not found" });
    }
});



/**
 * @swagger
 * /api/ways/{lineName}:
 *   get:
 *     summary: Get ways for a particular line.
 *     description: Get ways for a particular line.
 *     parameters:
 *        - in: path
 *          name: lineName
 *          required: true
 *          type: string
 *          description: name of the specific line
 *     responses:
 *       200:
 *         description: Fetched all ways for a particular line.
 */
map_route.get("/ways/:lineName", (req, res) => {
    const found = OSM_data.find((item) => item.line_name === req.params.lineName);
    if (found) {
        res.json(found.ways);
    } else {
        res.status(404).json({ message: "Line not found" });
    }
});


/**
 * @swagger
 * /api/busLines:
 *   get:
 *     summary: Get lines from another provider.
 *     description: Get lines from another provider.
 *     responses:
 *       200:
 *         description: Fetched all ways for a particular line.
 */
map_route.get("/busLines", (req, res) => {
    res.json(busLines_data);
});

/**
 * @swagger
 * /api/busLines/{lineName}:
 *   get:
 *     summary: Get ways for a particular line.
 *     description: Get ways for a particular line.
 *     parameters:
 *        - in: path
 *          name: lineName
 *          required: true
 *          type: string
 *          description: name of the specific line
 *     responses:
 *       200:
 *         description: Fetched all ways for a particular line.
 *       404:
 *         description: Line not found.
 */
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



/**
 * @swagger
 * /api/lineTypes:
 *   get:
 *     summary: Get different type of lines.
 *     description: Get different type of lines.
 *     responses:
 *       200:
 *         description: Fetched all different type of lines.
 */
map_route.get("/lineTypes", (req, res) => {
    res.json(lineTypes_data);
});

/**
 * @swagger
 * /api/busStops:
 *   get:
 *     summary: Get bus stops from another provider.
 *     description: Get bus stops from another provider.
 *     responses:
 *       200:
 *         description: Fetched all bus stops from another provider.
 */
map_route.get("/busStops", (req, res) => {
    res.json(busStops_data);
});

module.exports = map_route

