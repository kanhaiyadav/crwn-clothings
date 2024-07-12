import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.cocmponent";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";

const ShopPage = () => {
    console.log(useSelector(selectCollection('Jakets')));
    return (
        <div className="shop-page">
            <CollectionOverview />
        </div>
    )
};

export default ShopPage;