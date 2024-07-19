import React, { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.cocmponent";
import { selectCollection, selectLoading } from "../../redux/shop/shop.selector";
import { useDispatch, useSelector } from "react-redux";
import { firestore, convertCollectionstoMap } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { setLoading, updateCollections } from "../../redux/shop/shop.reducer";
import WithSpinner from "../../components/with-spinner/with-spinner.styles";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);



const ShopPage = () => {
    const unSubscribeFromSanpshot = null;
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = collection(firestore, 'collections');
        onSnapshot(collectionRef, async (snapshot) => {
            const collectionMap = convertCollectionstoMap(snapshot);  
            dispatch(updateCollections(collectionMap));
            dispatch(setLoading());
        })
    })
    console.log(useSelector(selectCollection('Jakets')));
    return (
        <div className="shop-page">
            <CollectionOverviewWithSpinner isLoading={useSelector(selectLoading)} />
        </div>
    )
};

export default ShopPage;