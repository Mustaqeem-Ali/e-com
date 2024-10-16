import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kid_banner from './components/Assests/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="Men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="Kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;