// Frameworks Imports

import { Route, BrowserRouter, Routes } from "react-router-dom";

// Import Pages

import Home from './pages/home/home';

// App code

function PageRoutes() {
  return (

    <BrowserRouter>
        <Routes>

            <Route element={<Home />} path="/" exact />

        </Routes>
    </BrowserRouter>

  );
}

export default PageRoutes;