import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart_utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    itemsCount: 0,
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
        }
    }
})

export const { toggleHidden, addItem } = cartSlice.actions;
export default cartSlice.reducer;