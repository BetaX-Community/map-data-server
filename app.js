const dotenv=require("dotenv");
const express = require("express");
dotenv.config()
const PORT=process.env.PORT || 2999;
const app = express();
const routes = require("./routes/map.route");

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
    console.log("Server running on port",PORT);
});