import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    searchProducts: [],
    searchProductsStatus: STATUS.IDLE,
}

export const getSearchProducts = createAsyncThunk('getSearchProducts', async (keyword) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
})  


const productSlice = createSlice({
    name: "searchProducts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchProducts.pending, (state, action) => {
                state.searchProductsStatus = STATUS.LOADING
            })
            .addCase(getSearchProducts.fulfilled, (state, action) => {
                state.searchProductsStatus = STATUS.SUCCESS;
                state.searchProducts = action.payload
            })
            .addCase(getSearchProducts.rejected, (state, action) => {
                state.searchProductsStatus = STATUS.FAIL
            })
    }
})

export default productSlice.reducer;

