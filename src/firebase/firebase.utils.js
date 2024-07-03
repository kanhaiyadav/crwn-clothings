import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyAaATXScLLfdVtZT6Lgyg1OiUGBpPSoOU8",
    authDomain: "crwn-clothings-c8d97.firebaseapp.com",
    projectId: "crwn-clothings-c8d97",
    storageBucket: "crwn-clothings-c8d97.appspot.com",
    messagingSenderId: "866323588090",
    appId: "1:866323588090:web:6a0f21a1c3350392437a43",
    measurementId: "G-9QNJYCQ5EN"
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app); 

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    if(!snapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt, 
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}



// Configure Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //this will alway trigger a google select account pop up whenever you click signin with google

// Export functions
export const signInWithGoogle = () => signInWithPopup(auth, provider);
