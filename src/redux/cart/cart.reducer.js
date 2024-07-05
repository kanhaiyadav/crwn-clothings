import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart_utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
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
        }
    }
})

export const { toggleHidden, addItem } = cartSlice.actions;
export default cartSlice.reducer;