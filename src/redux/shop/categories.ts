import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
	status: "idle",
	error: null,
};

export const fetchCategories = createAsyncThunk(
	"shop/fetchCategories",
	async (_, { rejectWithValue }) => {
		const API_URL = "https://fakestoreapi.com/products/categories";

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("Categories not found");
			}

			const data = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(err.message || "Failed to fetch categories");
		}
	}
);

const categories = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				state.error = action.payload as any;
			});
	},
});

export default categories.reducer;
