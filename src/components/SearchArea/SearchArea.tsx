import "./SearchArea.css"; 
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import getProductsThunk from "../../redux/actions/getProductsThunk";
import { useNavigate } from "react-router-dom";
import { setCategory, setPage, setQuery, setSort } from "../../redux/slices/searchOptionsSlice";

export default function SearchBar() {
	const dispatch = useAppDispatch();
	const navigate= useNavigate();
	const searchOptions = useAppSelector((state) => state.options);

	const applySearchOptions = () => {
		const searchParams = {
			...searchOptions,
			options: {
				...searchOptions.options,
				page: 1,
			}
		}
		dispatch(setPage(1));
		dispatch(getProductsThunk(searchParams));
		navigate('/');
	}
	
	return (
		<div className="search-area__wrapper">
			<div className="search-area">
				<p className="search-area__title">Search for books</p>
				<div className="text-input">
					<input
						className="search-input"
						type="text"
						placeholder="Enter book name"
						onChange={(e) => dispatch(setQuery(e.target.value))}
						onKeyDown={(e) => {
								if(e.key === 'Enter') {
									applySearchOptions();
								}
							}}/>
					<div className="search-icon" onClick={applySearchOptions}/>
				</div>
				<div className="sort-filters__container">
					<div className="filter-input__container">
						<label htmlFor="categories">Categories</label>
						<select className="filter-select" name="categories" id="categories-select" onChange={(e) => dispatch(setCategory(e.target.value))}>
							<option value="all">all</option>
							<option value="art">ART</option>
							<option value="biography">BIOGRAPHY</option>
							<option value="computers">COMPUTERS</option>
							<option value="history">HISTORY</option>
							<option value="medical">MEDICAL</option>
							<option value="poetry">POETRY</option>
						</select>
					</div>
					<div className="sort-input__container">
						<label htmlFor="categories">Sort by</label>
						<select className="sort-select" name="sortBy" id="" onChange={(e) => dispatch(setSort(e.target.value))}>
							<option value="relevance">relevance</option>
							<option value="newest">newest</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}