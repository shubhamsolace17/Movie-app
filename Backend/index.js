require('./config/database').connect();
const { ValidationError } = require('express-validation');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const swaggerUI = require("swagger-ui-express");
const userRoute = require('./route/user');
const movieRoute = require('./route/movie');
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors")
const swagger_path = YAML.load(path.resolve(__dirname, "./swagger.yaml"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swagger_path));
app.use(express.json());
app.use(cors());
app.use(express.static('./uploads'));
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
