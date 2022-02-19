import ProductItem from "../../components/Product-item/ProductItem";
import "./style.scss";
import { ProductContext } from "../../api/ProductContext";
import React, { useState, useContext } from "react";

export default function CategoryPage() {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div className="page page--category">
      <h2 className="text--headline">Products</h2>
      <div className="d-flex flex-wrap align-items-start mt-5">
        <div className="productList productList--col-4 pr-4">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
