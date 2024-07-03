import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import HatsPage from './pages/HatsPage/HatsPage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin_signup-page/signin_signup-page.component';
import React from 'react';
import { auth } from './firebase/firebase.utils';

const SneakersPage = () => (
    <h1>Sneakers Page</h1>
)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unSubscribeFromAuth = null;
    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
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

export default App;