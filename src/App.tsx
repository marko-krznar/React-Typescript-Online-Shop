import "./scss/style.scss";

import { ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navigation from "./components/Navigation";
import FooterElement from "./components/Footer";

function App() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Layout: {
						headerBg: "#fff",
						bodyBg: "#fff",
						footerBg: "#fff",
						footerPadding: "2rem 0",
					},
					Typography: {
						titleMarginBottom: "0",
					},
				},
			}}
		>
			<Layout>
				<Header className="container header-container">
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
				<FooterElement />
			</Layout>
		</ConfigProvider>
	);
}

export default App;
