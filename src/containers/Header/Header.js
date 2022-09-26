import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiBatMask } from "react-icons/gi";

import { CartContext } from "../../api/CartContext";
import "../../scss/style.scss";

const Header = () => {
	const [cart] = useContext(CartContext);

	return (
		<nav className="menu d-flex justify-content-end align-items-center">
			<Link className="menu-logo" to="/">
				<GiBatMask />
			</Link>
			<Link to="/">Home</Link>
			<Link to="/React-Webshop/products">Products</Link>
			<Link to="/React-Webshop/cart">
				Cart<span className="menu-cart-number">{cart.length}</span>
			</Link>
		</nav>
	);
};

export default Header;
