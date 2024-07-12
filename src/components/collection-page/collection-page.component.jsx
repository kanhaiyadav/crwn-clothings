import React from "react";
import './collection-page.styles.scss';
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";
import CollectionItem from "../collection-item/collection-item.component";


const CollectionPage = () => {
    const collection = useSelector(selectCollection(useParams().id)).items;
    return (
        <div>
            <h1>Collection Page</h1>
            <div className="preview">
                {
                    collection
                        .map((item) => (
                            <CollectionItem
                                key={item.id}
                                item={item}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPage;