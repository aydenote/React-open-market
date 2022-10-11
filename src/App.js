import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import "./slick.css";
import "./slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
