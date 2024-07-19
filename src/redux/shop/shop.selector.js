import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectLoading = createSelector(
    [selectShop],
    (shop) => shop.isLoading
)

export const selectCollections = createSelector(
    [selectShop],
    (shop) => Object.values(shop.collections)
)


export const selectCollection = (urlParams) => {
    return createSelector(
        [selectCollections],
        (collections) => {
            console.log(collections)
            return collections[urlParams]
        }
    )
}

