import React from "react";
import "./cart-drop-down.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";


const CartDropDown = () => (
    <div className="cart-dropdown">

        <div className="cart-items">
            {
                useSelector(selectCartItems).slice().reverse().map(item => <CartItem key={item.id} item={item} />)
            }
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

export default React.memo(CartDropDown);