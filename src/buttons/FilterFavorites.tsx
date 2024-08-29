import { FC, ChangeEventHandler } from "react";

type IProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FilterFavorites: FC<IProps> = (props) => {
  const { onChange } = props;

  return (
    <div className="d-flex align-items-center">
      <label>Display only your favorites movies</label>
      <input
        style={{ 
          width: 20,
          height: 20
        }}
        className="m-2"
        type="checkbox"
        onChange={onChange}
      />
    </div>
  );
};

export { FilterFavorites };