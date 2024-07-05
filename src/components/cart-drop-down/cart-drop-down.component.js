import React from "react";
import "./cart-drop-down.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping (1).svg";
import { toggleHidden } from "../../redux/cart/cart.reducer";
import { useNavigate } from "react-router-dom";


const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {
                    cartItems.length ? cartItems.slice().reverse().map(item => <CartItem key={item.id} item={item} />) : (
                        <div className="empty-cart">
                            <ShoppingIcon />
                        </div>
                    )
                }
            </div>
            <CustomButton
                onClick={
                    () => {
                        navigate("/checkout");
                        dispatch(toggleHidden());
                    }
            }
            >GO TO CHECKOUT</CustomButton>

        </div>
    )
}

export default React.memo(CartDropDown);