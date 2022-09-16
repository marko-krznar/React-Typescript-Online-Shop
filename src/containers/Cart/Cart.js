import React, { useContext } from "react";

import { Link } from "react-router-dom";

import CartItem from "../../components/Cart-item/CartItem";
import { CartContext } from "../../api/CartContext";

export default function Cart() {
	const [cart, setCart] = useContext(CartContext);

	const handleCheckout = () => {
		alert("Checkout");
	};

	const handleClearAll = () => {
		setCart([]);
	};

	const renderTable = () => {
		if (cart.length > 0) {
			return (
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th colSpan={2}>Price</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((cartItem, index) => (
							<CartItem key={index} cartItem={cartItem} />
						))}
					</tbody>
				</table>
			);
		}

		return <p>Add products to cart</p>;
	};

	const renderButtonClearAll = () => {
		if (cart.length > 0) {
			return <button onClick={handleClearAll}>Clear All</button>;
		}
	};

	const renderButtonCheckout = () => {
		if (cart.length > 0) {
			return <button onClick={handleCheckout}>Checkout</button>;
		}
	};

	return (
		<section className="sidebar sidebar--cart p-4 pt-5 pb-5">
			<Link to={"/products"}>Back to products</Link>
			<div>
				<h2 className="mb-4">Cart</h2>
				{renderButtonClearAll()}
			</div>
			{renderTable()}
			{renderButtonCheckout()}
		</section>
	);
}
