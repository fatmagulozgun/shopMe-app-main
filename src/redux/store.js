import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import searchSlice from './searchSlice'
import favoriteSlice from './favoriteSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    searchProducts: searchSlice,
    favorites: favoriteSlice,
  },
})