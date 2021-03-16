const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload');


const swaggerUi= require('swagger-ui-express');
const  YAML =require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');


var colors = require('colors');

require("dotenv").config();

const app = express();
let port = process.env.PORT || 2000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


const fileRoute = require("./routes/files");


app.use("/api/files", fileRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`API running for port ${port}`.green);
});