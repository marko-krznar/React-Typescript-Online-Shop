import React from "react";
import { Link } from "react-router-dom";
import "../../scss/style.scss";

const Header = () => {
	return (
		<nav className="menu d-flex justify-content-end align-items-center">
			<Link className="menu-logo" to="/">
				BatM's
			</Link>
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/cart">Cart</Link>
		</nav>
	);
};

export default Header;
