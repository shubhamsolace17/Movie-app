require('./config/database').connect();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const userRoute = require('./route/user');
const movieRoute = require('./route/movie');

app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})
