import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
	status: "idle",
	error: null,
};

export const fetchPopularProducts = createAsyncThunk(
	"shop/fetchPopularProducts",
	async (_, { rejectWithValue }) => {
		const API_URL = "https://fakestoreapi.com/products?limit=3";

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("Products not found");
			}

			const data = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(err.message || "Failed to fetch products");
		}
	}
);

const popularProducts = createSlice({
	name: "popularProducts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPopularProducts.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchPopularProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchPopularProducts.rejected, (state, action) => {
				state.status = "failed";
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				state.error = action.payload as any;
			});
	},
});

export default popularProducts.reducer;
