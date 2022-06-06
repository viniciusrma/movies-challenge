import MovieListHeading from "../components/MovieListHeading";
import { useEffect, useState } from "react";
import axios from "axios";

const Catalog = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios
      .get("http://localhost:4000/movie")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setMovies(data);
      });
    if (response.status === 200) setMovies(response.data);
  };

  console.log("data => ", movies);

  return (
    <div className="container-fluid movie-app">
      <div className="row mb-4 mt-4 d-flex align-items-center">
        <MovieListHeading heading="Catalog" />
      </div>
      <div className="row mb-4 mt-4 d-flex align-items-center">
        <tabel>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Title</th>
              <th style={{ textAlign: "center" }}>Plot</th>
              <th style={{ textAlign: "center" }}>Director</th>
              <th style={{ textAlign: "center" }}>Cast</th>
              <th style={{ textAlign: "center" }}>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.title}</th>
                    <th scope="row">{item.plot}</th>
                    <th scope="row">{item.director}</th>
                    <th scope="row">{item.cast}</th>
                    <th scope="row">{item.year}</th>
                  </tr>
                );
              })}
          </tbody>
        </tabel>
      </div>
    </div>
  );
};

export default Catalog;
