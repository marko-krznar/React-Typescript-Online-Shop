import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

import { AliwangwangFilled, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Button, Flex, Menu } from "antd";

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
					<Badge showZero count={cartItems.length}>
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
		<div className="navigation-container">
			<div className="inner-container-wrapper">
				<Flex align="center">
					<Button type="text" onClick={() => navigate("/")}>
						<Flex gap="small">
							<AliwangwangFilled /> <span>Webstore</span>
						</Flex>
					</Button>
					<Menu
						onClick={onClick}
						selectedKeys={[current]}
						mode="horizontal"
						items={items}
					/>
				</Flex>
			</div>
		</div>
	);
};

export default App;
