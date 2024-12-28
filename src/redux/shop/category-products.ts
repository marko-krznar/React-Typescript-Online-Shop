import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
	status: "idle",
	error: null,
};

export const fetchCategoryProducts = createAsyncThunk(
	"shop/fetchCategoryProducts",
	async (categoryName: string, { rejectWithValue }) => {
		const API_URL = `https://fakestoreapi.com/products/category/${categoryName}`;

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("Category products not found");
			}

			const data = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(
				err.message || "Failed to fetch category products"
			);
		}
	}
);

const categoryProducts = createSlice({
	name: "categoryProducts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategoryProducts.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchCategoryProducts.rejected, (state, action) => {
				state.status = "failed";
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				state.error = action.payload as any;
			});
	},
});

export default categoryProducts.reducer;
