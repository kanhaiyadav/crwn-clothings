import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.cocmponent";
import WithSpinner from "../../components/with-spinner/with-spinner.styles";
import { selectLoading } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);



const ShopPage = () => {
    return (
        <div className="shop-page">
            <CollectionOverviewWithSpinner isLoading={useSelector(selectLoading)} />
        </div>
    )
};

export default ShopPage;