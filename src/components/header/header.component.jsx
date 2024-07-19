import React from "react";
// import './header.component.styles.scss';
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-drop-down/cart-drop-down.component";
import { selectHiddenState } from "../../redux/cart/cart-selector";
import { HeaderComponent, LogoContainer, OpitonContainer, OptionLink } from "./header.styles";


const Header = () => {
    const hidden = useSelector(selectHiddenState);
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <>
            <HeaderComponent>
                <LogoContainer to="/">
                    <Logo className="logo" />
                </LogoContainer>
                <OpitonContainer>
                    <OptionLink to="/shop">
                        SHOP
                    </OptionLink>
                    <OptionLink to="/shop">
                        CONTACT
                    </OptionLink>
                    {
                        currentUser ?
                            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                            :
                            <OptionLink to="/signin">SIGN IN</OptionLink>
                    }
                    <CartIcon />
                </OpitonContainer>
                {
                    hidden ? null : <CartDropDown />
                }
            </HeaderComponent>
            <Outlet />
        </>
    )
}

export default React.memo(Header);