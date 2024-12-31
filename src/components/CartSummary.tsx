import { Card, Divider, Flex } from "antd";

import { useSelector } from "react-redux";
import { CartItem, cartItemsSelector } from "../redux/shop/cart";

import { renderPrice } from "../utils/helpers";

function CartSummary() {
	const cartItems = useSelector(cartItemsSelector);

	const cartItemsTotal = cartItems.reduce(
		(totals: number, product: CartItem) =>
			totals + product.price * product.quantity,
		0
	);

	return (
		<Card title="Order summary" className="cart-summary-wrapper">
			<Flex vertical gap="middle">
				{cartItems.map((cartItem: CartItem) => (
					<Flex gap="large" justify="space-between" align="center">
						<span>{cartItem.title}</span>
						<span>
							{renderPrice(cartItem.price * cartItem.quantity)}
						</span>
					</Flex>
				))}
			</Flex>
			<Divider />
			<Flex gap="large" justify="space-between">
				<span>Total</span>
				<span>{renderPrice(cartItemsTotal)}</span>
			</Flex>
		</Card>
	);
}

export default CartSummary;
