import React, { useState, createContext } from "react";
import plant from "../images/plant.jpg";
import glasses from "../images/glasses.jpg";
import bag from "../images/bag.jpg";
import watch from "../images/watch.jpg";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	return (
		<CartContext.Provider value={[cart, setCart]}>
			{props.children}
		</CartContext.Provider>
	);
};
