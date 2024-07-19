import { Link } from "react-router-dom";
import styled, { css } from "styled-components";


//defining a block of css code 
const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderComponent = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0px;
    left: 0px;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.85);
    padding:0px 30px;
`;


export const LogoContainer = styled(Link)`
    height: 100px;
    width: 100px;
    padding: 25px;
    display: grid;
    place-items: center;
`
export const OpitonContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`