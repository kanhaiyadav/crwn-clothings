import React from "react";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import { deleteItem, decreaseItem, addItem } from "../../redux/cart/cart.reducer";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(decreaseItem(cartItem))}>&#10094;</div>
                {quantity}
                <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div 
            className="remove-button" 
                onClick={() => { 
                    dispatch(deleteItem(cartItem));
            }}>&#10005;
            </div>
        </div>
    )
}

export default CheckoutItem;