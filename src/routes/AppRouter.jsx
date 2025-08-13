import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Recipes from "../pages/Recipes.jsx";
import RecoverPassword from "../pages/RecoverPassword.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Recipe from "../pages/Recipe.jsx";
import AdminPanel from "../pages/AdminPanel.jsx";
import Categories from "../pages/Categories.jsx";
import People from "../pages/People.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="admin" element={<AdminPanel />}>
        <Route path="categories" element={<Categories />} />
        <Route path="people" element={<People />} />
        <Route index element={<div>recipes</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
