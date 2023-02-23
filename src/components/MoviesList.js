import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  // console.log("MoviesList:", movies);
  // console.log(Object.keys(movies));
  // console.log(Object.values(movies));

  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;
