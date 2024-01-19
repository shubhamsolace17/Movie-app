const express = require('express');
const { validate } = require('express-validation');
const router = express.Router();
const movieController = require("../controller/movie");
const auth = require("../middleware/auth");
const { upload } = require('../middleware/upload');
const { movieValidation } = require('../validations');
const allowUnknown = { allowUnknown: true };

router.route('/create-movie').post(
    //validate(movieValidation.createMovie, {}, allowUnknown),
    auth, upload.single("poster"), movieController.createMovie);

router.route('/update-movie/:id').post(
    //validate(movieValidation.updateMovie, {}, allowUnknown),
    auth, upload.single("poster"), movieController.updateMovie);

router.route('/movie-list').post(
    //validate(movieValidation.movieList, {}, allowUnknown),
    auth, movieController.getAllMovieList);

router.route('/movie-by-id/:id').get(
    //validate(movieValidation.getMovie, {}, allowUnknown),
    auth, movieController.getMovieById);

router.route('/delete-movie/:id').patch(
    //validate(movieValidation.deleteMovie, {}, allowUnknown),
    auth, movieController.deleteMovie);

// router.post('/create-movie', auth, upload.single("poster"), movieController.createMovie);
// router.patch('/update-movie/:id', auth, upload.single("poster"), movieController.updateMovie);
// router.post('/movie-list', auth, movieController.getAllMovieList);
// router.get('/movie-by-id/:id', movieController.getMovieById);
// router.patch('/delete-movie/:id', movieController.deleteMovie);

module.exports = router;