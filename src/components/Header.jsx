import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { GiBatMask, GiHamburgerMenu } from "react-icons/gi";

import { CartContext } from "../local/CartContext";

const Header = () => {
	const [cart] = useContext(CartContext);

	return (
		<nav className="menu d-flex justify-content-end align-items-center">
			<div className="menu-logo-wrapper">
				<Link className="menu-logo" to="/">
					<GiBatMask />
				</Link>
			</div>
			<ul className="menu-list d-flex">
				<li className="menu-item">
					<Link to="/">Home</Link>
				</li>
				<li className="menu-item">
					<Link to="/React-Webshop/products">Products</Link>
				</li>
				<li className="menu-item">
					<Link to="/React-Webshop/cart">
						Cart
						<span className="menu-cart-number">{cart.length}</span>
					</Link>
				</li>
			</ul>
			<div className="menu-hamburger">
				<GiHamburgerMenu />
			</div>
		</nav>
	);
};

export default Header;
