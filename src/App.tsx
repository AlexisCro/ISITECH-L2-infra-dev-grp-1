import { useState, useEffect } from "react";
import { movie } from "./types/movie";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import movies from "./movies.json";
import "./App.css";

// TODO: Use state to store the response API to avoid multiple requests

function App() {
  const [favorites, setFavoriteMovies] = useState<movie[]>(JSON.parse(localStorage.getItem('favoriteMovies') || '[]'));

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <main>
      <Navbar />
      <div className="cards-container">
        {movies.map((movie, index) => (
          <Card 
            key={index}
            title={movie.Title}
            year={movie.Year}
            genre={movie.Genre}
            director={movie.Director}
            plot={movie.Plot}
            poster={movie.Poster}
            movie={movie}
            favorites={favorites}
            setFavoriteMovies={setFavoriteMovies}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
