import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { NavLink, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

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
				<ShoppingCartOutlined />
			</NavLink>
		),
	},
];

const App: React.FC = () => {
	const navigate = useNavigate();
	const [current, setCurrent] = useState("mail");

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};

	return (
		<>
			<Button onClick={() => navigate("/")}>Online Shop</Button>
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
