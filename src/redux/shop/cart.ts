import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
	id: number;
	title: string;
	image: string;
	description: string;
	price: number;
	quantity: number;
}

export interface Cart {
	products: Array<CartItem>;
}
const initialState: Cart = {
	products: [],
};

const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<CartItem>) => {
			const product = action.payload;

			const existingProduct = state.products.find(
				(existingProduct: CartItem) => existingProduct.id === product.id
			);

			if (existingProduct) {
				existingProduct.quantity += product.quantity;
			} else {
				state.products.push({ ...product, quantity: 1 });
			}
		},
	},
});

export const { addProduct } = cart.actions;

export const cartItemsSelector = (state: any) => state.cart.products;

export default cart.reducer;
