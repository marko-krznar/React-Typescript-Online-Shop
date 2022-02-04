import React from "react";
import { Link } from "react-router-dom";
import "../../scss/style.scss";
import "./style.scss";

export default function Header() {
  return (
    <nav className="menu d-flex justify-content-end">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
