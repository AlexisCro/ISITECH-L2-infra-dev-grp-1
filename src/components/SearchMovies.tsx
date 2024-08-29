import { FC, useState } from "react";

type IProps = {
  onSearch: (query: string) => void;
};

const SearchMovie: FC<IProps> = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid justify-content-center">
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search" value={query} onChange={inputChange} />
        </form>
      </div>
    </nav>
  );
};

export { SearchMovie };
