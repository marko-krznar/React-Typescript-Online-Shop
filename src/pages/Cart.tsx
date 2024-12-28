import { useSelector } from "react-redux";
import { CartItem, cartItemsSelector } from "../redux/shop/cart";

import { Table } from "antd";
import { renderPrice } from "../utils/helpers";

function Cart() {
	const cartItems = useSelector(cartItemsSelector);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
		},
	];

	const cartRows = cartItems.map((cartItem: CartItem) => ({
		key: cartItem.id,
		name: cartItem.title,
		price: renderPrice(cartItem.price),
		quantity: cartItem.quantity,
		total: renderPrice(cartItem.quantity * cartItem.price),
	}));

	return <Table dataSource={cartRows} columns={columns} pagination={false} />;
}

export default Cart;
