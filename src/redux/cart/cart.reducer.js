import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHidden: (state) => {
            state.hidden = !state.hidden
        }
    }
})

export const { toggleHidden } = cartSlice.actions;
export default cartSlice.reducer;