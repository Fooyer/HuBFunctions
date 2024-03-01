'use client'

import styles from './header.module.css';
import Cookies from 'js-cookie';

import Link from 'next/link';

function Header(){

    async function alterarTema(){
        let tema = Cookies.get('tema')

        if(tema === 'light'){
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
            <button onClick={alterarTema}>Alternar</button>
        </header>
    )
};

export default Header;