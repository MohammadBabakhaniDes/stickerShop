import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get("http://localhost:9001/stickers");
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

const initialState = {
    items: [],
    status: "null"
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "rejected";
        }
    }
});

export default ProductSlice.reducer;