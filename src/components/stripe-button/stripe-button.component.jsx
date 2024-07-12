import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51PbjlzRpudDALXqSmGJxMMbhn5XpUSHRJuh0f91kq83viUlpS2N8kDmoDMe6Ilk3o1i5ZXDYtyLuStwm3aFcbBel005izPl9aW";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} 
        />
    )
}

export default StripCheckoutButton;