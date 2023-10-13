import { getProducts } from "../../services/ApiRequests";
import { SearchType } from "../../types/types";
import { setBooks } from "../slices/catalogSlice";
import { setPage } from "../slices/searchOptionsSlice";
import { store } from "../store";

type DispatchType = typeof store.dispatch;

const getProductsThunk = (options: SearchType) => async (dispatch: DispatchType) => {
	console.log(options);
	try {
		const data = await getProducts(options);
		dispatch(setBooks(data));
	} catch (e) {
		console.error(e);
	}
}
export default getProductsThunk;