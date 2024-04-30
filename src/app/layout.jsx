'use client';

import "./globals.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FunctionsContextProvider } from "./context/FunctionsContext";
import { AuthContextProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {

  const [tema, setTema] = useState('')

  useEffect(() => {
    setTema(Cookies.get("tema"))

    if (Cookies.get("tema") === '') {
      setTema('light')
    }
  }, [])

  return (
    <html lang="en" id="root" className={tema}>
      <body>
        <AuthContextProvider>
            <Header />

            <FunctionsContextProvider>
              {children}
            </FunctionsContextProvider>
            
            <Footer />
          </AuthContextProvider>
      </body>
    </html>
  );
}