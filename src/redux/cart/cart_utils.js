export const addItemToCart = (cartItems, cartItemToAdd) => {
    let flag = false;
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === cartItemToAdd.id) {
            flag = true;
            cartItems[i].quantity += 1;
            break;
        }
    }
    if (flag) {
        return cartItems;
    }
    else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
}