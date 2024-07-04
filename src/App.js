import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import HatsPage from './pages/HatsPage/HatsPage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin_signup-page/signin_signup-page.component';
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user-reducer/user.reducer';
import { connect } from 'react-redux';


const SneakersPage = () => (
    <h1>Sneakers Page</h1>
)
class App extends React.Component {
    unSubscribeFromAuth = null;
    componentDidMount() {
        //auth.onAuthStateChanged() creates an open connection(subscribe) between our app and the firebase(i.e. they firebase all the time listens to the 
        //any change int eh auth state) whenever the state changes auth.onAuthStateChanged() will be return an user if user signin
        // or null if user signout.
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                onSnapshot(userRef, snapShot => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        createdAt: snapShot.data().createdAt.toString(),
                        ...snapShot.data()
                    })
                })
            }
            else
                this.props.setCurrentUser(userAuth)
        });
    }

    
    componentWillUnmount() {
        //here we will unsubscribe from the auth state changes(as our app has been unmounted)
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser/>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/hats' element={<HatsPage />} />
                    <Route exact path='/sneakers' element={<SneakersPage />} />
                    <Route exact path='/shop' element={<ShopPage />} />
                    <Route exact path='/signin' element={<SignInSignUpPage  />} />
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setCurrentUser
}

export default connect(null, mapDispatchToProps)(App);