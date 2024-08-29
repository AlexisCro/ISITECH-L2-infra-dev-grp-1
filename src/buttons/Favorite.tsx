import { FC } from "react";
import { movie } from "../types/movie";

type IProps = {
  onClick: () => void;
  favorites: movie[];
  movie: movie;
}

const Favorite: FC<IProps> = (props) => {
  const { onClick, favorites, movie } = props;
  const isFavorite = favorites.some((favorite) => favorite === movie);

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={isFavorite ? "red" : "white"} className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    </button>
  );
};

export { Favorite };
