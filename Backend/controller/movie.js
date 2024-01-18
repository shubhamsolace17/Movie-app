const Movie = require('../model/movie');

/******** CREATE MOVIE FUNCTION */
exports.createMovie = async (req, res) => {
  try {
    const { title, publishingYear } = req.body;

    if (!(title && publishingYear)) {
      res.status(400).send("title and  publishingYear are required");
    }


    const oldMovie = await Movie.findOne({ title });

    if (oldMovie) {
      return res.status(409).send("Movie Already Exist");
    }
    const movieInfo = {
      title,
      publishingYear,
      poster: req.file.originalname,
    }
    movieInfo.userId = req.user.user_id;
    const movie = await Movie.create(movieInfo);
    res.status(201).json({ success: true, message: "Movie created successfully", movieInfo: movie });
  } catch (error) {
    res.status(500).json({ success: false, error: error })
    console.log(error)
  }
};

/******** UPDATE MOVIE FUNCTION ********/
exports.updateMovie = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      publishingYear: req.body.publishingYear,
    };
    if (req.file) {
      updateData.poster = req.file.originalname;
    }
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.id },
      updateData
    );
    if (updatedMovie) {
      res.status(200).json({
        success: true,
        message: "Movie updated successfully",
        updatedMovie,
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

/******** GET ALL MOVIE LIST OF A USER FUNCTION **********/

exports.getAllMovieList = async (req, res) => {
  try {
    const { pagination = true, page = 1, limit = 10 } = req.query;
    let list = null;
    const response = { data: null }
    if (pagination) {
      list = await Movie.find({ userId: req.user.user_id, status: 1 }).limit(limit).skip((page - 1) * limit);
      const count = await Movie.countDocuments({ status: 1, userId: req.user.user_id });
      response.data = list;
      response.totalPages = Math.ceil(count / limit);
      response.currentPage = page;
    } else {
      list = await Movie.find({ userId: req.user.user_id, status: 1 });
      response.data = list;
    }
    res.status(200).json({ success: true, message: "Movie List", data: response })
  } catch (error) {
    console.log("error555", error)
    res.status(500).json({ success: false, message: error })
  }
}

/******* GET SINGLE MOVIE BY ID *********/

exports.getMovieById = async (req, res) => {
  try {
    const movieDetail = await Movie.findOne({ _id: req.params.id, status: 1 });
    if (movieDetail) {
      res.status(200).json({ success: true, message: "MovieDetails", movieDetail: movieDetail })
    } else {
      res.status(200).json({ success: true, message: "No data found", movieDetail: [] })
    }

  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
}

/******* DELETE MOVIE *******/
exports.deleteMovie = async (req, res) => {
  try {
    const updateData = {
      status: 0
    };
    const deletedMovie = await Movie.updateOne(
      { _id: req.params.id },
      updateData
    );
    if (deletedMovie) {
      res.status(200).json({
        success: true,
        message: "Movie deleted successfully",

      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
