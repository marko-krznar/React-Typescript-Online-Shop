import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TiDelete } from "react-icons/ti";

import { CartContext } from "../../api/CartContext";

export default function CartItem({ cartItem, setCoupon }) {
	const [cart, setCart] = useContext(CartContext);

	const handleDeleteCartItem = () => {
		const newCart = cart.filter((prod) => prod.id !== cartItem.id);
		setCart(newCart);
		setCoupon({
			couponName: "",
			discount: null,
			discountPrice: null,
		});
	};

	return (
		<tr className="product-row">
			<td className="product-row-img">
				<Link
					to={`/React-Webshop/product/${cartItem.slug}`}
					state={cartItem}
				>
					<img src={cartItem.image} alt={cartItem.name} />
				</Link>
			</td>
			<td className="product-row-name">
				<Link
					to={`/React-Webshop/product/${cartItem.slug}`}
					state={cartItem}
				>
					{cartItem.name}
				</Link>
			</td>
			<td className="product-row-quantity">{cartItem.quantity}</td>
			<td className="product-row-price">
				{cartItem.price * cartItem.quantity} €
			</td>
			<td className="product-row-remove">
				<button onClick={handleDeleteCartItem}>
					<TiDelete className="product-row-remove-btn" />
				</button>
			</td>
		</tr>
	);
}
