import './CatalogPage.css';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import addProductsThunk from "../../redux/actions/addProductsThunk";

export default function CatalogPage() {
	const booksInfo = useAppSelector((state) => state.catalog);
	const searchOptions = useAppSelector((state) => state.options);
	const dispatch = useAppDispatch();
	const checkProperty = (property: any) => {
		if (!property) {
			return [];
		}
		return property;
	}
	const searchParams = {
		...searchOptions,
		options: {
			...searchOptions.options,
			page: searchOptions.options.page + 1,
		}
	}
	return (
		<div className="catalog">
			<p className='catalog__total-result'>{booksInfo.catalog.totalItems ? `Found ${booksInfo.catalog.totalItems} results` : ''}</p>
			<ul className="catalog__list">
			{booksInfo.catalog.items ?
			booksInfo.catalog.items.map((info) => <ProductInfo
				title={checkProperty(info.volumeInfo.title)}
				authors={checkProperty(info.volumeInfo.authors)}
				imgUrl={checkProperty(info.volumeInfo.imageLinks).length === undefined ? info.volumeInfo.imageLinks.smallThumbnail ? info.volumeInfo.imageLinks.smallThumbnail : info.volumeInfo.imageLinks.thumbnail : ''}
				categories={checkProperty(info.volumeInfo.categories)}
        id={info.id}
				key={info.etag}
			/>) : ''}
			</ul>
			{booksInfo.catalog.items ? <button className='load-more__btn' onClick={() => dispatch(addProductsThunk(searchParams))}>Load more</button> : ''}
		</div>
	)
}