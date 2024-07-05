import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleHidden } from "../../redux/cart/cart.reducer";
import { useDispatch, useSelector } from "react-redux";
// import { selectHiddenState } from "../../redux/cart/cart-selector";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";


const CartIcon = () => {
    const count = useSelector(selectCartItemsCount)

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleHidden());
    }
    return (
        <div
            className="cart-icon"
            onClick={handleClick}
        >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">
                {
                    count
                }
            </span>
        </div>
    )
}


export default React.memo(CartIcon);