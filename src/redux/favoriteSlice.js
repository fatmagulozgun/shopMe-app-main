import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('favorites');
    if(cart) {
        return JSON.parse(localStorage.getItem('favorites'))
    }
    else {
        return []
    }
}

const saveToLocalStorage = (data) => {
    localStorage.setItem('favorites', JSON.stringify(data))
}

const initialState = {
    favorites: fetchFromLocalStorage(),
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const isItemInFavorites = state.favorites.find(item => item.id === action.payload.id);

            if (!isItemInFavorites) {
              const newFavoriteItem = {
                ...action.payload
              };
              state.favorites.push(newFavoriteItem);
              saveToLocalStorage(state.favorites);
            }
        },

        removeFromFavorites: (state, action) => {
            const updatedList = state.favorites.filter(item => item.id !== action.payload);
            state.favorites = updatedList;
            saveToLocalStorage(state.favorites);
        },

        clear: (state) => {
            state.favorites = [];
            saveToLocalStorage(state.favorites);
        }
    }
})

export const {addToFavorite, removeFromFavorites, clear} = favoriteSlice.actions;

export default favoriteSlice.reducer;
