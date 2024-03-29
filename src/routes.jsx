// Frameworks Imports

import { Route, BrowserRouter, Routes } from "react-router-dom";

// Import Pages

import Home from './pages/home/home';
import Sobre from "./pages/sobre/sobre";
import NewFunction from "./pages/newFunction/newFunction";
import AreaRestrita from "./pages/areaRestrita";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Perfil from "./pages/perfil/perfil";

// Routes Function Code

function PageRoutes() {

  // HTML Code

  return (

    <BrowserRouter>
        <Routes>

            <Route element={<Home />} path="/" exact />
            <Route element={<Sobre />} path="/sobre" exact />
            <Route element={<NewFunction />} path="/criar-funcao" exact />
            <Route element={<AreaRestrita />} path="/area-restrita" exact />
            <Route element={<Login />} path="/login" exact />
            <Route element={<Register />} path="/register" exact />
            <Route element={<Perfil />} path="/perfil" exact />

        </Routes>
    </BrowserRouter>

  );
}

export default PageRoutes;