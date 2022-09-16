import React, { useContext } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartContext } from "../../api/CartContext";
import "./style.scss";

export const ProductPage = () => {
	const [cart, setCart] = useContext(CartContext);
	const location = useLocation();

	const handleAddToCart = () => {
		const productExist = cart.find((prod) => prod.id === location.state.id);
		if (productExist) return;
		setCart([location.state, ...cart]);
	};

	return (
		<div className="page product">
			<div className="breadcrumb">
				<Link to={"/products"}>Back to products</Link>
			</div>
			<div className="block--img">
				<img src={location?.state?.image} alt="Awesome Plant" />
			</div>
			<div className="block--info">
				<h2>{location?.state?.name}</h2>
				<p>{location?.state?.desc}</p>
				<p>Price: {location?.state?.price} €</p>
				<button className="btn btn--light" onClick={handleAddToCart}>
					Add to cart
				</button>
			</div>
		</div>
	);
};
