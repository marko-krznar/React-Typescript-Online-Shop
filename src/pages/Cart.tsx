import { useDispatch, useSelector } from "react-redux";
import { CartItem, cartItemsSelector, removeProduct } from "../redux/shop/cart";

import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { renderPrice } from "../utils/helpers";
import { AppDispatch } from "../redux/store";

function Cart() {
	const dispatch = useDispatch<AppDispatch>();
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
		{
			dataIndex: "remove",
			key: "remove",
		},
	];

	const handleCartItemRemove = (cartItem: CartItem) => {
		dispatch(removeProduct(cartItem));
	};

	const cartRows = cartItems.map((cartItem: CartItem) => ({
		key: cartItem.id,
		name: cartItem.title,
		price: renderPrice(cartItem.price),
		quantity: cartItem.quantity,
		total: renderPrice(cartItem.quantity * cartItem.price),
		remove: (
			<Button
				icon={<DeleteOutlined />}
				onClick={() => handleCartItemRemove(cartItem)}
			/>
		),
	}));

	return <Table dataSource={cartRows} columns={columns} pagination={false} />;
}

export default Cart;
