// Frameworks Imports

import { useEffect, useState } from "react";
import { supabase } from "./providers/supabase";

// Import Routes

import PageRoutes from "./routes";

// Import static Components

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// App Code

function App() {

  // Initialize useState Variables

  const [ errorAuth,setErrorAuth ] = useState()

  // Verify If User if Logged In

  useEffect(()=>{
    async function vereficarSessao(){
      const { data, error } = await supabase.auth.refreshSession()
      const { session, user } = data
      setErrorAuth(error)
    }
    vereficarSessao()
  },[])

  // HTML Code

  return (
    <>

      <Header errorAuth={errorAuth} />

      <PageRoutes />

      <Footer />

    </>
  );
}

export default App;