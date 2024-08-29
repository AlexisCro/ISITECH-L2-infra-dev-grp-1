import { FC } from "react";
import { Favorite } from "../buttons/Favorite";
import { movie } from "../types/movie";
import { useState } from "react";

type IProps = {
  title: string;
  year: string;
  genre: string;
  director: string;
  plot: string;
  poster: string;
  movie: movie;
  favorites: movie[];
  setFavoriteMovies: (movies: movie[]) => void;
};

const Card: FC<IProps> = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { title, year, genre, director, plot, poster, movie, favorites, setFavoriteMovies } = props;
  const ShowDetail = () => {
    setShowDetails(!showDetails);
  };
  const addFavorite = (movie: movie) => {
    const newFavoriteMovies = [...favorites, movie];

    setFavoriteMovies(newFavoriteMovies);
  };

  const removeFavorite = (movie: movie) => {
    const newFavoriteMovies = favorites.filter((favorites) => favorites.Title !== movie.Title);
    setFavoriteMovies(newFavoriteMovies);

  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={poster} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          {title} ({year})
        </h5>
        <p className="card-text">
          <strong>Genre:</strong> {genre}
        </p>
        <p className="card-text">
          <strong>Director:</strong> {director}
        </p>
        {showDetails && (
          <div className="card-details">
            <p className="card-text">
              <strong>Detail :</strong> {plot}
            </p>
          </div>
        )}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <Favorite
          favorites={favorites}
          movie={movie}
          onClick={() => {
            favorites.some((favorite) => favorite.Title === movie.Title) ? removeFavorite(movie) : addFavorite(movie);
          }}
        />
        <button onClick={ShowDetail} className="btn btn-primary">
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      <div className="card-footer">
        <Favorite
          favorites={favorites}
          movie={movie}
          onClick= {() => {
            favorites.some((favorite) => favorite.Title === movie.Title) ? removeFavorite(movie) : addFavorite(movie);
          }}
        />
      </div>
    </div>
  );
};

export { Card };
