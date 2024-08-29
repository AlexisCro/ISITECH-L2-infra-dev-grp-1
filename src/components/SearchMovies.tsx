import { FC } from "react";

type IProps = {
	onSearch: (query: string) => void;
	query: string;
};

const SearchMovie: FC<IProps> = (props) => {
	const { onSearch, query } = props;

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(e.target.value);
	};

	return (
		<div className="container justify-content-center mb-5">
			<form className="d-flex input-group">
				<span className="input-group-text" id="inputGroup-sizing-default">
					Search your movie
				</span>
				<input className="form-control me-2" type="text" placeholder="Search" value={query} onChange={inputChange} />
			</form>
		</div>
	);
};

export { SearchMovie };
