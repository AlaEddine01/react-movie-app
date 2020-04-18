import React from "react";
import MovieCard from "./movie-card";

const MoviesContainer = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
export default MoviesContainer;
