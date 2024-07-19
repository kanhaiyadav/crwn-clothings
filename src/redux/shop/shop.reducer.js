import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    collections: [],
    isLoading: true,
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: INITIAL_STATE,
    reducers: {

        updateCollections: (state, action) => {
            state.collections = action.payload
        },
        setLoading: (state) => {
            state.isLoading = false
        }
    }
})

export const { updateCollections , setLoading} = shopSlice.actions
export default shopSlice.reducer;