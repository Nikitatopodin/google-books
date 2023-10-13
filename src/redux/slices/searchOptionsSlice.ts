import { createSlice } from '@reduxjs/toolkit';
import { SearchType } from '../../types/types';

const initialState: SearchType = {
	options: {
		query: null,
		category: 'all',
		sort: 'relevance',
		page: 1,
	}

};

const searchOptionsSlice = createSlice({
	name: 'catalog',
	initialState: initialState,
	reducers: {
		setQuery(state: SearchType, action) {
			state.options.query = action.payload;
		},
		setCategory(state: SearchType, action) {
			state.options.category = action.payload;
		},
		setSort(state: SearchType, action) {
			state.options.sort = action.payload;
		},
		setPage(state: SearchType, action) {
			state.options.page = action.payload;
		}
	}
});

export const {
	setQuery,
	setCategory,
	setSort,
	setPage
} = searchOptionsSlice.actions;

export default searchOptionsSlice.reducer;