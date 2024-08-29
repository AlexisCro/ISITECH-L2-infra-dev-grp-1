import { useState, useEffect } from "react";
import { movie } from "./types/movie";
import { Card } from "./components/Card";
import { FilterFavorites } from "./buttons/FilterFavorites";
import movies from "./movies.json";
import { SearchMovie } from "./components/SearchMovies";
import "./App.css";

// TODO: Use state to store the response API to avoid multiple requests

function App() {
  const [favorites, setFavoriteMovies] = useState<movie[]>(JSON.parse(localStorage.getItem("favoriteMovies") || "[]"));
  const [moviesList, setMoviesList] = useState<movie[]>(movies);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovie = (search: string) => {
    const filteredMovies = movies.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMoviesList(filteredMovies);
  };

  return (
    <main>
      <SearchMovie onSearch={searchMovie} />
      <div className="d-flex justify-content-center align-items-center">
        <FilterFavorites
          onChange={(e) => {
            if (e.target.checked) {
              setMoviesList(favorites);
            } else {
              setMoviesList(movies);
            }
          }}
        />
      </div>

      <div className="cards-container">
        {moviesList.map((movie, index) => (
          <Card key={index} title={movie.Title} year={movie.Year} genre={movie.Genre} director={movie.Director} plot={movie.Plot} poster={movie.Poster} movie={movie} favorites={favorites} setFavoriteMovies={setFavoriteMovies} />
        ))}
      </div>
    </main>
  );
}

export default App;
