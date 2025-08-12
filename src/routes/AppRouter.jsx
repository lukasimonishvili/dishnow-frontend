import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import RecoverPassword from "../pages/RecoverPassword.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Recipe from "../pages/Recipe.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
