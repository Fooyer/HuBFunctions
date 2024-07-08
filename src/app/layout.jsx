"use client";

import "./globals.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HeadComponent from "./components/head/head";
import { Toaster, toast } from "react-hot-toast";

export default function RootLayout({ children }) {

  const [tema, setTema] = useState('')

  useEffect(() => {
    setTema(Cookies.get("tema"))

    if (Cookies.get("tema") !== 'dark' && Cookies.get("tema") !== 'light'){
      setTema('light')
    }

    let msg = sessionStorage.getItem('msg');

    if (msg !== null){
      toast.success(msg);
      sessionStorage.removeItem('msg');
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
      <Toaster
       toastOptions={{
          duration: 3000,
          style: {
            border: 'var(--shadow)',
            padding: '5px',
            color: 'var(--text)',
            background: 'var(--secondary)',
          },
        }}
      />
    </html>
  );
}