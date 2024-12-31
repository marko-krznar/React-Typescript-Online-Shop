import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

import { ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Button, Menu } from "antd";

import { cartItemsSelector } from "../redux/shop/cart";
import { useSelector } from "react-redux";

type MenuItem = Required<MenuProps>["items"][number];

const App: React.FC = () => {
	const navigate = useNavigate();
	const cartItems = useSelector(cartItemsSelector);

	const [current, setCurrent] = useState("mail");

	const items: MenuItem[] = [
		{
			key: "home",
			label: <NavLink to="/">Home</NavLink>,
		},
		// {
		// 	key: "categories",
		// 	label: <NavLink to="/categories">Categories</NavLink>,
		// },
		{
			key: "cart",
			icon: (
				<NavLink to="/cart">
					<Badge count={cartItems.length}>
						<ShoppingCartOutlined style={{ fontSize: "1.25rem" }} />
					</Badge>
				</NavLink>
			),
		},
	];

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};

	return (
		<>
			<Button type="text" onClick={() => navigate("/")}>
				Online Shop
			</Button>
			<Menu
				onClick={onClick}
				selectedKeys={[current]}
				mode="horizontal"
				items={items}
			/>
		</>
	);
};

export default App;
