import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { GiBatMask } from "react-icons/gi";

import { CartContext } from "../../api/CartContext";

const Header = () => {
	const [cart] = useContext(CartContext);

	return (
		<nav className="menu d-flex justify-content-end align-items-center">
			<div className="menu-logo-wrapper">
				<Link className="menu-logo" to="/">
					<GiBatMask />
				</Link>
			</div>
			<Link className="menu-item" to="/">
				Home
			</Link>
			<Link className="menu-item" to="/React-Webshop/products">
				Products
			</Link>
			<Link className="menu-item" to="/React-Webshop/cart">
				Cart<span className="menu-cart-number">{cart.length}</span>
			</Link>
		</nav>
	);
};

export default Header;
