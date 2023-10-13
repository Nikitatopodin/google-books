import { SearchType } from "../types/types";

const API_KEY = 'AIzaSyAGv0BpkyHkv5BnPD9P-XiXfWEQPjvBokY';

function getApiRoot(options: string) {
	const baseLink = 'https://www.googleapis.com/books/v1/volumes'
	return `${baseLink}${options}&key=${API_KEY}`
}

async function getProducts(options: SearchType) {
	const category = options.options.category === 'all' ? '' : `+subject:${options.options.category}`;
	const URL = getApiRoot(`?q=${options.options.query}${category}&startIndex=${options.options.page * 30 - 30}&maxResults=30&orderBy=${options.options.sort}`)
	try {
		const res = await fetch(URL);
		const data = await res.json();
		return data;
	} catch(e) {
		console.error(e);
	}
}

async function getProductById(id:string) {
	const URL = `${getApiRoot(id)}`
	try {
		const res = await fetch(URL);
		const data = await res.json();
		return data
	} catch(e) {
		console.error(e);
	}
}


export {getProducts, getProductById}