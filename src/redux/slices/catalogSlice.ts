import { createSlice } from '@reduxjs/toolkit';
import { CatalogType } from '../../types/types';

const initialState: CatalogType = {
	catalog: {
		items: null,
		totalItems: null,
	},

};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialState,
	reducers: {
		setBooks(state: CatalogType, action) {
			state.catalog = action.payload;
		},
		addBooks(state: CatalogType, action) {
			state.catalog.items?.push(...action.payload);
		},
	}
});

export const {
	setBooks,
	addBooks,
} = catalogSlice.actions;

export default catalogSlice.reducer;