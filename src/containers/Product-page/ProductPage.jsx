import React, { useContext } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { CartContext } from "../../api/CartContext";

export const ProductPage = () => {
	const [cart, setCart] = useContext(CartContext);
	const location = useLocation();

	const handleAddToCart = () => {
		const productExist = cart.find((prod) => prod.id === location.state.id);
		if (productExist) return;
		setCart([location.state, ...cart]);
	};

	return (
		<main className="page-wrapper product-wrapper">
			<section className="breadcrumb-wrapper">
				<Link className="d-flex align-items-center" to={"/products"}>
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
					<a
						className="btn product-wrapper-summary-info-btn"
						onClick={handleAddToCart}
					>
						Add to cart
					</a>
				</div>
			</section>
		</main>
	);
};
