// const  files  =  require('./libs/readfiles');

// console.log(files.read('./files/test.xls'));
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./docs/swagger.yaml");
var colors = require('colors');

require("dotenv").config();

const app = express();

let port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRoute = require("./routes/files");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/read", userRoute);

app.listen(port, () => {
  console.log(`API running for port ${port}`.green);
});