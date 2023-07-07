import React from "react";
import MovieCard from "./MovieCard";

export default function MovieListe({ movies,title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="liste">
        {movies.map((movie) => (
          <MovieCard>movie={movie}</MovieCard>
        ))}
      </div>
    </div>
  );
}
