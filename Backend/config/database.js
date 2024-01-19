require('dotenv').config();
const mongoose = require("mongoose");

const  MONGO_URI  = "mongodb+srv://arun:oClBIPfdcEoGFMgM@cluster123.3t52yqs.mongodb.net/?retryWrites=true&w=majority";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error('error',error);
    });
};
