const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title : { type: String, default: null },
  publishingYear: { type: Number, default: null },
  poster: { type: String, default: null },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
},
{
    timestamps: true,
  }
);

module.exports = mongoose.model("movie", movieSchema);
