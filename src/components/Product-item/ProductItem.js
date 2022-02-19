import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div className="product__item">
      <div className="position-relative">
        <img src={product.image} alt={product.name} />
        <div className="position-absolute block--photo-author">
          Photo by <a href={product.imgAuthorLink}>{product.imgAuthor}</a> on{" "}
          <a href={product.imgSource}>Unsplash</a>
        </div>
      </div>
      <div className="info p-4">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="block--price">
            <span>{product.price} EUR</span>
          </div>
          <div className="block--add-to-cart">
            <Link
              to={`/product/${product.slug}`}
              className="btn btn-primary mb-2"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
