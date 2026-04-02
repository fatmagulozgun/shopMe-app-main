import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { fetchJson } from "../utils/api";

const initialState = {
    searchProducts: [],
    searchProductsStatus: STATUS.IDLE,
    searchProductsError: null,
}

export const getSearchProducts = createAsyncThunk('getSearchProducts', async (keyword) => {
    return fetchJson("/products");
})  


const productSlice = createSlice({
    name: "searchProducts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchProducts.pending, (state, action) => {
                state.searchProductsStatus = STATUS.LOADING
                state.searchProductsError = null;
            })
            .addCase(getSearchProducts.fulfilled, (state, action) => {
                state.searchProductsStatus = STATUS.SUCCESS;
                state.searchProducts = action.payload
            })
            .addCase(getSearchProducts.rejected, (state, action) => {
                state.searchProductsStatus = STATUS.FAIL
                state.searchProductsError = action.error.message;
            })
    }
})

export default productSlice.reducer;

