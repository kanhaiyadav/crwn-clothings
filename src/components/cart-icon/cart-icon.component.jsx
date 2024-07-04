import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleHidden } from "../../redux/cart/cart.reducer";
import { useDispatch } from "react-redux";



const CartIcon = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleHidden());
    }
    return <div
        className="cart-icon"
        onClick={handleClick}
    >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
}
    

export default CartIcon;