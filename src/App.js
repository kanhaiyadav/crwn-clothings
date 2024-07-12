import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin_signup-page/signin_signup-page.component';
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user-reducer/user.reducer';
import { connect } from 'react-redux';
import CheckoutPage from './pages/CheckoutPage/checkout-page.component';
import CollectionPage from './components/collection-page/collection-page.component';
import ShopPage from './pages/ShopPage/ShopPage.component';

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
                <Header currentUser />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path='/:id' element={<CollectionPage />} />
                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/signin' element={this.props.currentUser ? <Navigate to='/' /> : <SignInSignUpPage />} />
                        <Route path='/checkout' element={<CheckoutPage />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = {
    setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);