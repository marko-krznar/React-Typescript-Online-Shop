import "./scss/style.scss";

import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Layout: {
						headerBg: "#fff",
						bodyBg: "#fff",
					},
				},
			}}
		>
			<Layout className="container">
				<Header>
					<Navigation />
				</Header>
				<Content>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/category/:cityId"
							element={<Category />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route
							path="/products/:productId"
							element={<Product />}
						/>
					</Routes>
				</Content>
				<Footer>footer</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
