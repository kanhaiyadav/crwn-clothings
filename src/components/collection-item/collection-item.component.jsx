import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.reducer";

const CollectionItem = ({item}) => {
    const { id, name, price, imageUrl } = item;
    console.log(item);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addItem(item));
    }
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton
                inverted
                onClick={handleClick}
            >Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem;