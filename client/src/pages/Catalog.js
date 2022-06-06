import MovieListHeading from "../components/MovieListHeading";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

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
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <div className="container-fluid movie-app">
      <Header />
      <div className="row m-4 d-flex align-items-center justify-content-center">
        <MovieListHeading heading="Catalog" />
        <Link to={"/catalog/add"}>
          <button type="button" className="btn btn-light m-1">
            Add new movie
          </button>
        </Link>
      </div>
      <div className="row m-4 d-flex align-items-center justify-content-center">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Plot</th>
              <th>Director</th>
              <th>Cast</th>
              <th>Year</th>
              <th>Actions</th>
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
                    <th scope="row">
                      <Link to={`/catalog/update/${item._id}`}>
                        <button
                          type="button"
                          className="btn btn-outline-primary m-1"
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="btn btn-outline-danger m-1"
                      >
                        Delete
                      </button>

                      <Link to={`/catalog/view/${item._id}`}>
                        <button
                          type="button"
                          className="btn btn-outline-info m-1"
                        >
                          View Details
                        </button>
                      </Link>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Catalog;
