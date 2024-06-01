const cors=require("cors");
const dotenv=require("dotenv");
const serverless = require("serverless-http");
const swagger = require('../swagger');
const express = require("express");
dotenv.config()
const PORT=process.env.PORT || 2999;
const app = express();
const routes = require("../routes/map.route");

swagger(app)
app.use(express.json());
app.use(cors());

app.use("/api", routes);

const server = app.listen(PORT, () => {
    console.log("Server running on port",PORT);
});

module.exports.handler = serverless(app);
module.exports = server;
