import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalog from './slices/catalogSlice';
import options from './slices/searchOptionsSlice';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	catalog,
	options,
});

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export const store = setupStore();