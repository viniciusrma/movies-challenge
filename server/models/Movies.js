const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: String,
  plot: String,
  director: String,
  cast: String,
  year: Number,
  liked: Boolean,
  comment: {
    user_name: String,
    email: String,
    content: String,
  },
});

module.exports = Movie;
