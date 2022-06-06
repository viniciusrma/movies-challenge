const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const moviesRoutes = require("./routes/moviesRoutes");
require("dotenv").config();

const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/movie", moviesRoutes);

app.get("/", (req, res) => res.json({ message: "hello world" }));

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apucluster0.cnltv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Server is listening on port: http://localhost:${port},`,
        "Connected to Mongo :)"
      )
    );
  })
  .catch((err) => console.log(err));
