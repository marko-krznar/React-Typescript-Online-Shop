import "./scss/style.scss";
import Homepage from "./containers/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Cart from "./containers/Cart/Cart";
import CategoryPage from "./containers/Category-page/CategoryPage";
import Header from "./containers/Header/Header";
import { ProductPage } from "./containers/Product-page/ProductPage";
import { ProductProvider } from "./api/ProductContext";
import { CartProvider } from "./api/CartContext";

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
