require('./config/database').connect();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const swaggerUI = require("swagger-ui-express");
const userRoute = require('./route/user');
const movieRoute = require('./route/movie');
const YAML = require("yamljs");
var path = require("path");
var swagger_path = YAML.load(path.resolve(__dirname, "./swagger.yaml"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swagger_path));
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})
