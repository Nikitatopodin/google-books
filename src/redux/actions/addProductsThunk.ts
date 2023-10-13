import { getProducts } from "../../services/ApiRequests";
import { SearchType } from "../../types/types";
import { addBooks } from "../slices/catalogSlice";
import { setPage } from "../slices/searchOptionsSlice";
import { store } from "../store";

type DispatchType = typeof store.dispatch;

const addProductsThunk = (options: SearchType) => async (dispatch: DispatchType) => {
	try {
		const data = await getProducts(options);
		dispatch(addBooks(data.items));
		dispatch(setPage(options.options.page + 1));
	} catch (e) {
		console.error(e);
	}
}
export default addProductsThunk;