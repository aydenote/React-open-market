import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import SignUpPage from './views/SignUpPage';
import ProductDetailPage from './views/ProductDetailPage';
import SellerCenterPage from './views/SellerCenterPage';
import AddProductPage from './views/AddProductPage';
import './slick.css';
import './slick-theme.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/productDetail" element={<ProductDetailPage />} />
        <Route path="/sellerCenter" element={<SellerCenterPage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
