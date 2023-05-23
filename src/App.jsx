// Frameworks Imports
import React, { useEffect, useState } from "react";

// Import Routes

import PageRoutes from "./routes";

// Import static Components

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { supabase } from "./providers/supabase";

// App Code

function App() {

  const [ errorAuth,setErrorAuth ] = useState()

  useEffect(()=>{
    async function vereficarSessao(){
      const { data, error } = await supabase.auth.refreshSession()
      const { session, user } = data
      setErrorAuth(error)
    }
    vereficarSessao()
  },[])

  return (
    <>

      <Header errorAuth={errorAuth} />

      <PageRoutes />

      <Footer />

    </>
  );
}

export default App;