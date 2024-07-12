import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./Shop_Data";
const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: INITIAL_STATE,
    reducers: {}
})

export default shopSlice.reducer;