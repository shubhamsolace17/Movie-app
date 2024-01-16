const Movie = require('../model/movie');

exports.createMovie = async(req, res) =>{
    try {
        console.log("user123", req.user);
        const { title,  publishingYear, poster } = req.body;
  
      if (!(title && publishingYear && poster )) {
        res.status(400).send("All input is required");
      }
  
      
      const oldMovie = await Movie.findOne({ title });
  
      if (oldMovie) {
        return res.status(409).send("Movie Already Exist");
      }
      const movieInfo = {
        title,
        publishingYear,
        poster,
      }
      movieInfo.userId = req.user.user_id;
      const movie = await Movie.create(movieInfo);
      res.status(201).json({success:true, message:"Movie created successfully", movieInfo:movie});
    } catch (error) {
        res.status(500).json({success: false, error:error})
        console.log(error)
    }
}