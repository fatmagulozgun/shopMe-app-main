import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJson } from "../utils/api";

import { STATUS } from "../utils/status";

const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
}


export const getCategories = createAsyncThunk("category", async() => {
    return fetchJson("/products/categories");
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categoriesStatus = STATUS.SUCCESS;
                state.categories = action.payload;
            })
            .addCase(getCategories.pending, (state) => {
                state.categoriesStatus = STATUS.LOADING;
            })
            .addCase(getCategories.rejected, (state) => {
                state.categoriesStatus = STATUS.FAIL;
            })
    }
})

export default categorySlice.reducer;
