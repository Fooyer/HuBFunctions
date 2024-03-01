'use client'

import styles from './header.module.css';
import Cookies from 'js-cookie';

import Link from 'next/link';

import Image from 'next/image';
import imgLua from '../../../../public/lua.svg';

function Header(){

    let tema = Cookies.get('tema')

    async function alterarTema(){
        let temas = Cookies.get('tema')

        if((temas === 'light') || (temas == undefined) || (temas == '')){
            Cookies.set("tema",'dark', {expires: 365})
            document.getElementById('root').classList.add('dark')
            document.getElementById('root').classList.remove('light')

        } else {
            Cookies.set("tema",'light', {expires: 365})
            document.getElementById('root').classList.add('light')
            document.getElementById('root').classList.remove('dark')
        }
    }

    return (
        <header className={styles.header}>
            <nav>
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
            <button onClick={alterarTema} className={tema === 'light' ? styles.lightBotao : styles.darkBotao}>
                {tema === "light" && <Image src={imgLua} />}
            </button>
        </header>
    )
};

export default Header;