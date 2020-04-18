import React from "react";
import movies from "./movies-data";
import MoviesContainer from "./movie-container";
import FilterName from "./name-filter";
import RatingFilter from "./ratingFilter";
import Modall from "./modall";

class MoviePage extends React.Component {
  state = {
    movies,
    movieName: "",
    ratingCountFilter: 0,
  };
  handleSearch = (input) => {
    this.setState({
      movieName: input,
    });
  };
  handleRatingFilter = (newRating) => {
    this.setState({
      ratingCountFilter: newRating,
    });
  };
  addMovie = (image, name, rank, year) => {
    this.setState({
      movies: [
        ...this.state.movies,
        { image: image, name: name, rank: rank, year: year },
      ],
    });
  };
  render() {
    console.log(this.state.movies);
    let filterMovie = this.state.movies.filter(
      (movie) =>
        movie.name.toUpperCase().includes(this.state.movieName.toUpperCase()) &&
        movie.rank >= this.state.ratingCountFilter
    );
    return (
      <div>
        <div className="search">
          <FilterName search={this.handleSearch} />
          <RatingFilter
            count={this.state.ratingCountFilter}
            change={this.handleRatingFilter}
          />
          <Modall add={this.addMovie} />
        </div>

        <MoviesContainer movies={filterMovie} />
      </div>
    );
  }
}
export default MoviePage;
