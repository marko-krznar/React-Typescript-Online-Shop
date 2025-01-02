import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./shop/categories";
import popularProductsReducer from "./shop/popular-products";
import newProductsReducer from "./shop/new-products";
import categoryProductsReducer from "./shop/category-products";
import cartReducer from "./shop/cart";
import productReducer from "./shop/active-product";

import { Product } from "../components/ProductCard";

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		popularProducts: popularProductsReducer,
		newProducts: newProductsReducer,
		categoryProducts: categoryProductsReducer,
		cart: cartReducer,
		product: productReducer,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const categoriesSelector = (state: RootStore): null | Array<string> =>
	state.categories.data;
export const popularProductsSelector = (
	state: RootStore
): null | Array<Product> => state.popularProducts.data;
export const newProductsSelector = (state: RootStore): null | Array<Product> =>
	state.newProducts.data;
export const categoryProductsSelector = (
	state: RootStore
): null | Array<Product> => state.categoryProducts.data;
export const activeProductSelector = (state: RootStore) => state.product.data;
