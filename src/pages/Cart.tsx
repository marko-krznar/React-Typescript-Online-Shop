import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { CartItem, cartItemsSelector, removeProduct } from "../redux/shop/cart";

import { Button, Flex, Table, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { renderPrice } from "../utils/helpers";
import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router";

function Cart() {
	const { Text } = Typography;
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
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

	const renderCartContent = () => {
		if (cartItems.length > 0) {
			return (
				<>
					<Table
						dataSource={cartRows}
						columns={columns}
						pagination={false}
					/>
					<CartSummary />
				</>
			);
		}

		return (
			<Flex vertical gap="middle" align="center" justify="center">
				<Typography.Title level={2}>
					Your Basket is empty
				</Typography.Title>
				<Text type="secondary">
					Looks like you haven't added anything to you cart yet.
				</Text>
				<Button onClick={() => navigate("/")} type="primary">
					Start Shopping
				</Button>
			</Flex>
		);
	};

	return (
		<div className="container">
			<div className="inner-container-wrapper cart-container">
				{renderCartContent()}
			</div>
		</div>
	);
}

export default Cart;
