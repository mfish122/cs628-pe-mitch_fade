import React, { useState } from "react";
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: "Inception", genre: "Science Fiction", movieYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", movieYear: 1994 },
    { title: "The Dark Knight", genre: "Action", movieYear: 2008 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const checkGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (movieTitle) => {
    alert(`You clicked on "${movieTitle}"`);
  };

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const selectedMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      <select value={selectedGenre} onChange={checkGenreChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <div>
        {selectedMovies.map((movie, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              cursor: "pointer",
            }}
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.movieYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
