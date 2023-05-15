// Frameworks Imports
import React from "react";

// Import Routes

import PageRoutes from "./routes";

// Import static Components

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// App Code

function App() {
  return (
    <>

      <Header />

      <PageRoutes />

      <Footer />

    </>
  );
}

export default App;