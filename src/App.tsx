import { useState, useEffect } from "react";
import { movie } from "./types/movie";
import { Card } from "./components/Card";
import { FilterFavorites } from "./buttons/FilterFavorites";
import { SearchMovie } from "./components/SearchMovies";
import InputSwitch from "./components/InputSwitch";
import movies from "./movies.json";
import "./App.css";

function App() {
  const [favorites, setFavoriteMovies] = useState<movie[]>(JSON.parse(localStorage.getItem("favoriteMovies") || "[]"));
  const [moviesList, setMoviesList] = useState<movie[]>(movies);
  const [isFavoritesFilter, setIsFavoritesFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovie = (search: string) => {
    const sourceList = isFavoritesFilter ? favorites : movies;
    const filteredMovies = sourceList.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMoviesList(filteredMovies);
  };

  return (
		<main className="min-vh-100">
			<nav className="w-100 d-flex justify-content-between pt-3 pb-5 ps-4">
				<InputSwitch></InputSwitch>
				<h1 className="h1 me-4">WatchList</h1>
			</nav>
			<SearchMovie
				onSearch={(query) => {
					setSearchQuery(query);
					searchMovie(query);
				}}
				query={searchQuery}
			/>
			<div className="d-flex justify-content-center align-items-center">
				<FilterFavorites
					onChange={(e) => {
						setSearchQuery("");
						if (e.target.checked) {
							setMoviesList(favorites);
							setIsFavoritesFilter(true);
						} else {
							setMoviesList(movies);
							setIsFavoritesFilter(false);
						}
					}}
				/>
			</div>

			<div className="container py-5">
				<div className="row">
					{moviesList.map((movie, index) => (
						<Card key={index} title={movie.Title} year={movie.Year} genre={movie.Genre} director={movie.Director} plot={movie.Plot} poster={movie.Poster} movie={movie} favorites={favorites} setFavoriteMovies={setFavoriteMovies} />
					))}
				</div>
			</div>
		</main>
	);
}

export default App;
