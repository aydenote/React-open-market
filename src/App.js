import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import LoginPage from "./views/LoginPage";
import "./slick.css";
import "./slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
