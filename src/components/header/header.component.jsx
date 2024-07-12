import React from "react";
import './header.component.styles.scss';
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-drop-down/cart-drop-down.component";
import { selectHiddenState } from "../../redux/cart/cart-selector";

const Header = () => {
    const hidden = useSelector(selectHiddenState);
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <>
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
                     currentUser?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown />
            }
            </div>
            <Outlet />
        </>
    )
}

export default React.memo(Header);