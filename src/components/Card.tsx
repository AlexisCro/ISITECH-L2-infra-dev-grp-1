import { FC } from "react";


type IProps = {
  title: string;
  year: string;
  genre: string;
  director: string;
  plot: string;
  poster: string;
};

const Card: FC<IProps> = ({ title, year, genre, director, plot, poster }) => {
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
        <p className="card-text">{plot}</p>
      </div>
    </div>
  );
};

export { Card };
