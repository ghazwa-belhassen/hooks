import React from "react";

export default function MovieCard({ movies }) {
  return (
    <div className="movie-card">
      <img src="{movie.posterURL}" alt="" />
      <div className="card-content">
        <h1> {movie.title}</h1>
        <p> {movie.description}</p>
        <p> {movie.duration}</p>
        <p> {movie.releaseDate}</p>
        <button> click to watch </button>
      </div>
    </div>
  );
}
