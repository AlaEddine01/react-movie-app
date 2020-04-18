import React from "react";
import Rating from "./rating";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="card" style={{ width: "12rem" }}>
      <Rating count={movie.rank} />
      <img src={movie.image} className="card-img-top" alt="filmPoster" />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text"> {movie.year} </p>
      </div>
    </div>
  );
};
export default MovieCard;
