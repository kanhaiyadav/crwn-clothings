import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectLoading = createSelector(
    [selectShop],
    (shop) => shop.isLoading
)

export const selectCollections = createSelector(
    [selectShop],
    (shop) => {
       return Object.values(shop.collections)
    }
)
export const selectCollectionsMap = createSelector(
    [selectShop],
    (shop) => shop.collections
)


export const selectCollection = (urlParams) => {
    return createSelector(
        [selectCollectionsMap],
        (collections) => {
            console.log(collections)
            return collections[urlParams]
        }
    )
}

