import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
	return (
		<div className="product-item-wrapper">
			<div className="product-item-wrapper-image">
				<img src={product.image} alt={product.name} />
				<div className="product-item-image-author">
					Photo by{" "}
					<a href={product.imgAuthorLink}>{product.imgAuthor}</a> on{" "}
					<a href={product.imgSource}>Unsplash</a>
				</div>
			</div>
			<div className="product-item-wrapper-info">
				<h2>{product.name}</h2>
				<p>{product.desc}</p>
				<div className="d-flex justify-content-between align-items-center">
					<div className="product-item-price">
						<span>{product.price} €</span>
					</div>
					<div className="product-item-add-to-cart">
						<Link
							to={`/product/${product.slug}`}
							state={product}
							className="btn"
						>
							See more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
