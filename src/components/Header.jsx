import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { GiBatMask, GiHamburgerMenu } from "react-icons/gi";

import { CartContext } from "../local/CartContext";

const Header = () => {
	const [cart] = useContext(CartContext);
	const [isActive, setIsActive] = useState(false);

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	const closeMenu = () => {
		setIsActive(false);
	};

	return (
		<nav className="menu d-flex justify-content-end align-items-center">
			<div className="menu-logo-wrapper">
				<Link className="menu-logo" to="/React-Webshop">
					<GiBatMask />
				</Link>
			</div>
			<button className="menu-hamburger" onClick={handleMenu}>
				<GiHamburgerMenu />
			</button>
			<ul
				className={
					isActive ? "menu-list d-flex active" : "menu-list d-flex"
				}
			>
				<li className="menu-item">
					<Link to="/React-Webshop" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="menu-item">
					<Link to="/React-Webshop/products" onClick={closeMenu}>
						Products
					</Link>
				</li>
				<li className="menu-item">
					<Link to="/React-Webshop/cart" onClick={closeMenu}>
						Cart
						<span className="menu-cart-number">{cart.length}</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
