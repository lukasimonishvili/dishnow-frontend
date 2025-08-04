import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
