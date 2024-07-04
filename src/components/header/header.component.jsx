import React from "react";
import './header.component.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-drop-down/cart-drop-down.component";

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                useSelector(state => state.user.currentUser)?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            useSelector(state => state.cart.hidden)?null:<CartDropDown />
        }
    </div>
)

export default Header;