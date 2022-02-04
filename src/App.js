import "./scss/style.scss";
import Homepage from "./containers/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CategoryPage from "./containers/Category-page/CategoryPage";
import Header from "./containers/Header/Header";
import ProductPage from "../src/containers/Product-page/ProductPage";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={`/product`} element={<ProductPage />} />
        <Route path="/products/*" element={<CategoryPage />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
