import React from "react";
import { selectCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
    console.log(useSelector(selectCollections));
    return (
        <div className="collection-overview">
            {
                useSelector(selectCollections).map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default React.memo(CollectionOverview);