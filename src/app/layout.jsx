'use client';

import "./globals.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HeadComponent from "./components/head/head";

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
      <HeadComponent title="HubFunctions" />
      <body>
          <Header />

            {children}
          
          <Footer />
      </body>
    </html>
  );
}