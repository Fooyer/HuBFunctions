// Frameworks Imports

import { Route, BrowserRouter, Routes } from "react-router-dom";

// Import Pages

import Home from './pages/home/home';
import Sobre from "./pages/sobre/sobre";
import NewFunction from "./pages/newFunction/newFunction";

// App code

function PageRoutes() {
  return (

    <BrowserRouter>
        <Routes>

            <Route element={<Home />} path="/" exact />
            <Route element={<Sobre />} path="/sobre" exact />
            <Route element={<NewFunction />} path="/criar-funcao" exact />

        </Routes>
    </BrowserRouter>

  );
}

export default PageRoutes;