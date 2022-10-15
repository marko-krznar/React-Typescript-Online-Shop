import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { GiBatMask } from "react-icons/gi";
import { BsBoxArrowRight } from "react-icons/bs";

import { CartContext } from "../../api/CartContext";

export default function ProductItem({ product }) {
	const [cart, setCart] = useContext(CartContext);

	const handleAddToCart = (product) => {
		const productExist = cart.find(
			(cartItem) => cartItem.id === product.id
		);

		if (productExist) {
			setCart(
				cart.map((cartItem) =>
					cartItem.id === product.id
						? {
								...productExist,
								quantity: productExist.quantity + 1,
						  }
						: cartItem
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

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
				<span className="product-item-price">{product.price} €</span>
			</div>
			<div className="product-item-overlay">
				<span className="ws-product-icon">
					<GiBatMask />
				</span>
				<div className="product-item-add-to-cart">
					<button
						onClick={() => handleAddToCart(product)}
						className="btn"
					>
						Add to cart
					</button>
				</div>
				<div className="product-item-see-more">
					<Link
						to={`/React-Webshop/product/${product.slug}`}
						state={product}
						className="ws-link ws-link-icon d-flex align-items-center"
					>
						See more <BsBoxArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
}
