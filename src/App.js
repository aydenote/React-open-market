import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import ProductDetailPage from "./views/ProductDetailPage";
import "./slick.css";
import "./slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/productDetail" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
