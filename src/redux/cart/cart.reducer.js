import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, decreaseItemCount } from "./cart_utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    itemsCount: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHidden: (state) => {
            state.hidden = !state.hidden
        },
        addItem: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload);
            state.itemsCount += 1;
            state.total += action.payload.price;
        },

        decreaseItem: (state, action) => {
            if (action.payload.quantity > 1) {
                state.cartItems = decreaseItemCount(state.cartItems, action.payload);
                state.itemsCount -= 1;
                state.total -= action.payload.price;
            }
            else {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                state.itemsCount -= 1;
                state.total -= action.payload.price;
            }
        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            state.itemsCount -= action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
        }
    }
})

export const { toggleHidden, addItem, decreaseItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;