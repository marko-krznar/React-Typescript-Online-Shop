import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { CartContext } from "../local/CartContext";

export const ProductPage = () => {
	const [cart, setCart] = useContext(CartContext);
	const location = useLocation();
	const [productQuantity, setProductQuantity] = useState(1);

	const increaseQuantity = () => {
		setProductQuantity(productQuantity + 1);
	};

	const decreaseQuantity = () => {
		setProductQuantity(productQuantity - 1);

		if (productQuantity === 1) {
			setProductQuantity(1);
		}
	};

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
								quantity: productQuantity,
						  }
						: cartItem
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: productQuantity }]);
		}
	};

	useEffect(() => {}, [productQuantity]);

	return (
		<main className="page-wrapper product-wrapper">
			<section className="breadcrumb-wrapper">
				<Link
					className="d-flex align-items-center"
					to={"/React-Webshop/products"}
				>
					<BsArrowLeft />
					<span className="breadcrumb-wrapper-text">
						Back to products
					</span>
				</Link>
			</section>
			<section className="product-wrapper-summary d-flex">
				<div className="product-wrapper-summary-img">
					<img src={location?.state?.image} alt="Awesome Plant" />
				</div>
				<div className="product-wrapper-summary-info">
					<h2 className="product-wrapper-summary-info-headline">
						{location?.state?.name}
					</h2>
					<p>{location?.state?.desc}</p>
					<p className="product-wrapper-summary-info-price">
						Price: {location?.state?.price} €
					</p>
					<div className="product-quantity">
						<p>Quantity:</p>
						<button onClick={decreaseQuantity}>-</button>
						<span>{productQuantity}</span>
						<button onClick={increaseQuantity}>+</button>
					</div>
					<a
						className="btn product-wrapper-summary-info-btn"
						onClick={() => handleAddToCart(location.state)}
					>
						Add to cart
					</a>
				</div>
			</section>
		</main>
	);
};
