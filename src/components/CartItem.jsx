import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TiDelete } from "react-icons/ti";

import { CartContext } from "../local/CartContext";
import { useEffect } from "react";

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

	const decreaseQuantity = (cartItem) => {
		const cartProduct = cart.find((product) => product.id === cartItem.id);

		if (cartProduct) {
			setCart(
				cart.map((cartItemProduct) =>
					cartItemProduct.id === cartItem.id
						? {
								...cartProduct,
								quantity: cartProduct.quantity - 1,
						  }
						: cartItemProduct
				)
			);
		}

		if (cartProduct.quantity === 1) {
			const newCart = cart.filter(
				(product) => product.id !== cartProduct.id
			);
			setCart(newCart);
		}
	};

	const increaseQuantity = (cartItem) => {
		const cartProduct = cart.find((product) => product.id === cartItem.id);

		if (cartProduct) {
			setCart(
				cart.map((cartItemProduct) =>
					cartItemProduct.id === cartItem.id
						? {
								...cartProduct,
								quantity: cartProduct.quantity + 1,
						  }
						: cartItemProduct
				)
			);
		}
	};

	// useEffect(() => {}, [cartProduct.quantity]);

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
			<td className="product-row-quantity">
				<button onClick={() => decreaseQuantity(cartItem)}>-</button>
				<span>{cartItem.quantity}</span>
				<button onClick={() => increaseQuantity(cartItem)}>+</button>
			</td>
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
