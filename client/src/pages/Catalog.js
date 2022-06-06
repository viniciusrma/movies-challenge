import MovieListHeading from "../components/MovieListHeading";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      const response = await fetch("http://localhost:4000/movie", {
        method: "GET",
        headers: { accept: "application/json" },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setMovies(result);
      return result;
    } catch (err) {
      console.log(err);
    }

    // const response = await fetch("http://localhost:4000/movie", {
    //   method: "GET",
    //   headers: { accept: "application/json" },
    //   mode: "cors",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setMovies(res);
    //   })
    //   .then((res) => {
    //     res.status === 200 ? setMovies(res) : console.log("");
    //   });
  }

  useEffect(() => {
    getMovies();
    console.log("data => ", movies);
  }, [movies]);

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
