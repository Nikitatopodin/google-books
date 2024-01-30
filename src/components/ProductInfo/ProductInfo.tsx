import './ProductInfo.css';
import { useNavigate } from "react-router-dom";

export default function ProductInfo(props: { title: string, authors: string[], imgUrl: string, categories: string[], id: string }): JSX.Element {
  const navigate = useNavigate();
  return (
    <li className="catalog__list__item" key={props.id} onClick={() => navigate(props.id)}>
      <img className="list__item__img" src={props.imgUrl} alt="Image" />
      <p className="list__item__category">{props.categories[0]}</p>
      <p className="list__item__title">{props.title}</p>
      <p className="list__item__authors">{props.authors.map((author: string, index) => {
        if (index !== props.authors.length - 1) {
          return author + ',' + ' ';
        }
        return author
      })}</p>
    </li>
  )
}