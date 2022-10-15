import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";

import { ProductProvider } from "./local/ProductContext";
import { CartProvider } from "./local/CartContext";
import Header from "./components/Header";
import Homepage from "./pages/Home";
import CategoryPage from "./pages/Category";
import { ProductPage } from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<div className="page">
			<CartProvider>
				<ProductProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/React-Webshop/cart" element={<Cart />} />
						<Route
							path={`/React-Webshop/product/:productID`}
							element={<ProductPage />}
						/>
						<Route
							path="/React-Webshop/products/*"
							element={<CategoryPage />}
						/>
						<Route path="/*" element={<Homepage />} />
					</Routes>
				</ProductProvider>
			</CartProvider>
		</div>
	);
};

export default App;
