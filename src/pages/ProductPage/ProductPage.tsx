import './ProductPage.css';
import { useLoaderData } from "react-router-dom"
import { IProduct } from "../../types/types"

export default function ProductPage() {
	const productData: IProduct  = useLoaderData() as IProduct;
	const checkProperty = (property: any) => {
		if (!property) {
			return [];
		}
		return property;
	}
	return (
		<div className="product">
				<div className="product-image__container">
					<img className="product__image" src={checkProperty(productData.volumeInfo.imageLinks).length === undefined ? productData.volumeInfo.imageLinks.smallThumbnail ? productData.volumeInfo.imageLinks.smallThumbnail : productData.volumeInfo.imageLinks.thumbnail : ''} alt="Image" />
				</div>
				<div className="product__info">
					<p className="product__info__categories">{productData.volumeInfo.categories ? productData.volumeInfo.categories.map((category: string, index) => {
						if (index !== productData.volumeInfo.categories.length - 1) {
							return category + ',' + ' ';
						} 
					return category
					}): ''}</p>
					<p className="product__info__title">{checkProperty(productData.volumeInfo.title)}</p>
					<p className="product__info__authors">{productData.volumeInfo.authors ? productData.volumeInfo.authors.map((author: string, index) => {
						if (index !== productData.volumeInfo.authors.length - 1) {
							return author + ',' + ' ';
						} 
						return author
					}): ''}</p>
					<p className="product__info__description">{checkProperty(productData.volumeInfo.description)}</p>
				</div>
		</div>
	)
}