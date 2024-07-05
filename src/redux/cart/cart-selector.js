import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const  selectCartItemsCount = createSelector(
    [selectCart],
    (cart) => cart.itemsCount
)


//below commented code is an example of how output selector(derived selectors) can also be passed to another output selector.
export const selectitemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)

export const selectHiddenState = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

