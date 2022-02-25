import React, { useState, useContext } from "react";
import { ProductContext } from "../../api/ProductContext";
import "./style.scss";

export default function ProductPage() {
  const [products, setProducts] = useContext(ProductContext);
  console.log(products);
  return (
    <div className="page product d-flex">
      <h3></h3>
      <div className="block--img">
        <img src="/static/media/plant.a0712536.jpg" alt="Awesome Plant" />
      </div>
      <div className="block--info">
        <h2>Awesome Plant</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          obcaecati, neque ipsum aliquam totam aut suscipit nisi consequuntur
          quam quas tempora sit unde voluptatum ipsa necessitatibus repellat
          rerum ea saepe!
        </p>
        <p>1400 EUR</p>
        <button className="btn btn--light">Add to cart</button>
      </div>
    </div>
  );
}
