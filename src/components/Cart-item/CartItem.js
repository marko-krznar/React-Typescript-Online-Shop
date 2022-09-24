import React, { useContext } from "react";
import { useEffect } from "react";

import { TiDelete } from "react-icons/ti";

import { CartContext } from "../../api/CartContext";

export default function CartItem({ cartItem, setCoupon }) {
	const [cart, setCart] = useContext(CartContext);

	const handleDeleteCartItem = () => {
		const newCart = cart.filter((prod) => prod.id !== cartItem.id);
		setCart(newCart);
		setCoupon({
			couponName: "total30",
			discount: null,
			discountPrice: null,
		});
	};

	return (
		<tr className="product-row">
			<td className="product-row-img">
				<img src={cartItem.image} alt={cartItem.name} />
			</td>
			<td className="product-row-name">{cartItem.name}</td>
			<td className="product-row-price">{cartItem.price} €</td>
			<td className="product-row-remove">
				<TiDelete
					className="product-row-remove-btn"
					onClick={handleDeleteCartItem}
				/>
			</td>
		</tr>
	);
}
