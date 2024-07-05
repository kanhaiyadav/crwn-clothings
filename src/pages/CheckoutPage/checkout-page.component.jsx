import React from "react";
import './checkout-page.styles.scss';
import { selectCartItems, selectTotal } from "../../redux/cart/cart-selector";
import { useSelector} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                useSelector(selectCartItems).map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }
            <div className="total">
                <span>TOTAL: ${useSelector(selectTotal)}</span>
            </div>

        </div>
    );
};

export default CheckoutPage;