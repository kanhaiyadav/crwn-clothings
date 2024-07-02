import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import HatsPage from './pages/HatsPage/HatsPage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/header/header.component';

const SneakersPage = () => (
    <h1>Sneakers Page</h1>
)
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/hats' element={<HatsPage />} />
                <Route exact path='/sneakers' element={<SneakersPage />} />
                <Route exact path='/shop' element={<ShopPage />} />
            </Routes>
        </div>


    );
}

export default App;