import "./scss/style.scss";
import Homepage from "./containers/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CategoryPage from "./containers/Category-page/CategoryPage";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
