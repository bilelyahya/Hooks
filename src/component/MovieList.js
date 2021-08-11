import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({films}) => {
  return (
    <div className="movie-card">
      {films.map((el,i) => (
        <MovieCard key={i} card={el} />
      ))}
    </div>
  );
};

export default MovieList;
