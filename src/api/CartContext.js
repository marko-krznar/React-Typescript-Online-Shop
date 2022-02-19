import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setcart] = useState([
    {
      id: 1,
      name: "Awesome Plant",
      price: 1400,
    },
  ]);
  return (
    <CartContext.Provider value={[cart, setcart]}>
      {props.children}
    </CartContext.Provider>
  );
};
