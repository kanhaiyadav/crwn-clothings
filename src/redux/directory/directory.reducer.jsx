import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: "hats",
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "jakets",
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "sneakers",
        },
        {
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            size: "large",
            id: 4,
            linkUrl: "",
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
            id: 5,
            linkUrl: "",
        },
    ],
};

const directorySlice = createSlice({
    name: "directory",
    initialState: INITIAL_STATE,
    reducers: {},
});

export const {} = directorySlice.actions;
export default directorySlice.reducer;