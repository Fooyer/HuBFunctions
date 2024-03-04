'use client'

import styles from './header.module.css';
import Cookies from 'js-cookie';

import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import imgLua from '../../../../public/lua.svg';
import imgSol from '../../../../public/sol.svg';

function Header(){

    const [tema, setTema] = useState(Cookies.get("tema"))

    async function alterarTema(){
        let temas = Cookies.get('tema')

        if((temas === 'light') || (temas == undefined) || (temas == '')){
            Cookies.set("tema",'dark', {expires: 365})
            document.getElementById('root').classList.add('dark')
            document.getElementById('root').classList.remove('light')
            setTema("dark")

        } else {
            Cookies.set("tema",'light', {expires: 365})
            document.getElementById('root').classList.add('light')
            document.getElementById('root').classList.remove('dark')
            setTema("light")
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </nav>
            <div onClick={alterarTema} className={tema === 'light' ? styles.lightBotao : styles.darkBotao}>
                <div className={styles.switchTema}>
                    {tema == "light" && <Image className={styles.imageLight} src={imgLua} />}
                    {tema == "dark" && <Image className={styles.imageDark} src={imgSol} />}
                </div>
            </div>
        </header>
    )
};

export default Header;