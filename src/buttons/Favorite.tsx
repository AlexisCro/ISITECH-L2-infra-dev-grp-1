import { FC } from "react";

type IProps = {
  onClick: () => void;
}

const Favorite: FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
    >
      Add to Favorites
    </button>
  );
};

export { Favorite };