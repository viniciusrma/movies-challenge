/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavourite from "../components/AddFavourite";
import RemoveFavourite from "../components/RemoveFavourites";

const ExternalCatalog = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2d737bae`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourite-movies")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveFavouritesToLocalStorage = (items) => {
    localStorage.setItem("favourite-movies", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveFavouritesToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveFavouritesToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <div className="container-fluid movie-app">
        <div className="row mb-4 mt-4 d-flex align-items-center">
          <MovieListHeading heading="External Catalog - OMDB" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row mb-3">
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>
        <div className="row mb-4 mt-4 d-flex align-items-center">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row mb-3">
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourite}
          />
        </div>
      </div>
    </div>
  );
};

export default ExternalCatalog;
