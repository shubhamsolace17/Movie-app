const express = require('express');
const router = express.Router()
const movieController = require("../controller/movie");
const auth  =require("../middleware/auth");
const {upload} = require('../middleware/upload');

router.post('/create-movie',auth, upload.single("poster"), movieController.createMovie);
router.patch('/update-movie/:id',auth, upload.single("poster"), movieController.updateMovie);
router.post('/movie-list',auth, movieController.getAllMovieList);
router.get('/movie-by-id/:id', movieController.getMovieById);
router.patch('/delete-movie/:id', movieController.deleteMovie);






module.exports = router;