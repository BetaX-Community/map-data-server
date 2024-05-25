const cors=require("cors");
const dotenv=require("dotenv");
const serverless = require("serverless-http");
const express = require("express");
dotenv.config()
const PORT=process.env.PORT || 2999;
const env=process.env.ENV || 'prod';
const app = express();
const routes = require("../routes/map.route");

app.use(express.json());
app.use(cors());
if (env === 'dev') {
  app.use("/api", routes);
} else {
  app.use("/.netlify/functions/app", routes);
}

app.listen(PORT, () => {
    console.log("Server running on port",PORT);
});

module.exports.handler = serverless(app);
