import { createSelector } from "reselect";

const CollectionIdMap = {
    hats: '1',
    sneakers: '2',
    jakets: '3',
    wonmens: '4', 
    mens: '5'
}

const selectShop = (state) => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)


export const selectCollection = (urlParams) =>
    createSelector(
        [selectCollections],
        (collections) => collections.find((collection) => collection.id === CollectionIdMap[urlParams])
    )

