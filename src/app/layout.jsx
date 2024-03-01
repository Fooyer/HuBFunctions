
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { cookies } from "next/headers";

export const metadata = {
  title: "HUB Functions",
  description: "Hub Functions",
};

export default async function RootLayout({ children }) {

  async function createInvoice(){
    'use server'
    
    const cookieStore = cookies()
    let tema = cookieStore.get('tema')

    if (tema == null) {
      tema = 'light'
    }

    return tema.value
  }
  
  const invoice = await createInvoice()

  return (
    <html lang="pt-br" id="root" className={invoice}>
      <body className={inter.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}