import React, { useState, useContext } from "react";
import CartItem from "../../components/Cart-item/CartItem";
import { CartContext } from "../../api/CartContext";

export default function Cart() {
  const [cart, setcart] = useContext(CartContext);
  return (
    <div className="d-flex flex-wrap align-items-start mt-5">
      <div className="sidebar sidebar--cart p-4 pt-5 pb-5">
        <h2 className="mb-4">Cart</h2>
        <ul>
          {cart.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
