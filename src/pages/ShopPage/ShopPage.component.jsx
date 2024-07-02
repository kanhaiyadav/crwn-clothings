import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Shop_Data from "../../pages/ShopPage/Shop_Data";


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: Shop_Data
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div>
                {

                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
};

export default ShopPage;