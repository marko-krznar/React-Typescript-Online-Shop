import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
	status: "idle",
	error: null,
};

export const fetchProduct = createAsyncThunk(
	"shop/fetchProduct",
	async (productId: number, { rejectWithValue }) => {
		const API_URL = `https://fakestoreapi.com/products/${productId}`;

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("product not found");
			}

			const data = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(err.message || "Failed to fetch product");
		}
	}
);

const product = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.status = "failed";
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				state.error = action.payload as any;
			});
	},
});

export default product.reducer;
