import React, { useContext } from "react";

import { CartContext } from "../../api/CartContext";

export default function CartItem({ cartItem }) {
	const [cart, setCart] = useContext(CartContext);

	const handleDeleteCartItem = () => {
		const newCart = cart.filter((prod) => prod.id !== cartItem.id);
		setCart(newCart);
	};

	return (
		<tr>
			<td>{cartItem.name}</td>
			<td>{cartItem.price}</td>
			<td>
				<button onClick={handleDeleteCartItem}>x</button>
			</td>
		</tr>
	);
}
