const router = require("express").Router();

const Movie = require("../models/Movies");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(movies);
    res.send({ msg: "This has CORS enabled 🙂",  });
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findOne({ _id: id });

    if (!movie) {
      res.status(422).json({ message: "Movie not found" });
      return;
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/", async (req, res) => {
  // ex: {"title": "Titanic", "plot": "Titanic plot", "director": "Titanic Director's name", "cast": "Kate Winslet, Leonardo DiCaprio", "year": 1998 }
  const { title, plot, director, cast, year, liked, comment } = req.body;

  if (!title) {
    res.status(422).json({ error: "<Title> Field is required" });
  }

  const movie = {
    title,
    plot,
    director,
    cast,
    year,
  };

  try {
    await Movie.create(movie);
    res.status(201).json({ message: "Movie added to DB" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { title, plot, director, cast, year } = req.body;

  const movie = {
    title,
    plot,
    director,
    cast,
    year,
  };

  try {
    const updatedMovie = await Movie.updateOne({ _id: id }, movie);

    if (updatedMovie.matchedCount === 0) {
      res.status(422).json({ message: "Movie not found" });
      return;
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const movie = await Movie.findOne({ _id: id });

  if (!movie) {
    res.status(422).json({ message: "Movie not found" });
    return;
  }

  try {
    await Movie.deleteOne({ _id: id });

    res.status(200).json({ message: "Movie deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
