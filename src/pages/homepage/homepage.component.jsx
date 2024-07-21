import React, {useEffect} from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.componet";
import { HomePageContainer } from "./homepage.styles";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";
import { updateCollections, setLoading } from "../../redux/shop/shop.reducer";
import { convertCollectionstoMap } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";

const HomePage = () => {
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
    return (
        <HomePageContainer>
            <DirectoryMenu />
        </HomePageContainer>
    )
}

export default HomePage;