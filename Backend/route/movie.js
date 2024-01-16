const express = require('express');
const router = express.Router()
const movieController = require("../controller/movie");
const auth  =require("../middleware/auth");

router.post('/create-movie',auth, movieController.createMovie);


module.exports = router;