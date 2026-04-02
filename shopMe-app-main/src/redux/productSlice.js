import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { fetchJson } from "../utils/api";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productsError: null,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
    productDetailError: null,
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    return fetchJson("/products");
})  

export const getDetailProduct = createAsyncThunk('getCategory', async (id) => {
    return fetchJson(`/products/${id}`);
}) 

export const getCategoryProducts = createAsyncThunk('getProduct', async (category) => {
    return fetchJson(`/products/category/${category}`);
}) 

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
                state.productsError = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
                state.productsError = action.error.message;
            })
            .addCase(getDetailProduct.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING
                state.productDetailError = null;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload
            })
            .addCase(getDetailProduct.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL
                state.productDetailError = action.error.message;
            })
            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
                state.productsError = null;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
                state.productsError = action.error.message;
            })
    }
})

export default productSlice.reducer;

