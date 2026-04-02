import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
    totalCartItem: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id);
            if (isItemCart) {
              const tempCart = state.carts.map(item => {
                if (item.id === action.payload.id) {
                  let tempQty = item.quantity + action.payload.quantity;
                  return {
                    ...item,
                    quantity: tempQty,
                  };
                } else {
                  return item;
                }
              });
          
              state.carts = tempCart;
              storeInLocalStorage(state.carts);
            } else {
              state.carts.push(action.payload);
              storeInLocalStorage(state.carts);
            }
          },

        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },

        increaseQuantity: (state, action) => {
            state.carts = state.carts.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            storeInLocalStorage(state.carts);
        },

        decreaseQuantity: (state, action) => {
            state.carts = state.carts
                .map((item) =>
                    item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                );
            storeInLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((total, item) => {
                return total += item.price * item.quantity;
            },0)
            state.itemCount = state.carts.length;
        },

        getCartTotalItems: (state) => {
          state.totalCartItem = state.carts.reduce((total,item) => {
            return total += item.quantity
          },0)
        }
    }
})


export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart,getCartTotal,getCartTotalItems} = cartSlice.actions;

export default cartSlice.reducer;
