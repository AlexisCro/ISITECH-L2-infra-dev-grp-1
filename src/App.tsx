import React from "react";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import movies from "./movies.json";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container bg-light"></div>
      <div className="cards-container">
        {movies.map((movie, index) => (
          <Card key={index} title={movie.Title} year={movie.Year} genre={movie.Genre} director={movie.Director} plot={movie.Plot} poster={movie.Poster} />
        ))}
      </div>
    </main>
  );
}

export default App;
