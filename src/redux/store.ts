import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./shop/categories";
import popularProductsReducer from "./shop/popular-products";
import categoryProductsReducer from "./shop/category-products";
import cartReducer from "./shop/cart";

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		popularProducts: popularProductsReducer,
		categoryProducts: categoryProductsReducer,
		cart: cartReducer,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
