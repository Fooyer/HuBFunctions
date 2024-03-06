'use client'

import styles from './header.module.css';
import Cookies from 'js-cookie';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import imgLua from '../../../../public/lua.svg';
import imgSol from '../../../../public/sol.svg';

function Header(){

    const [tema, setTema] = useState(Cookies.get("tema"))
    const [hamburguer, setHamburguer] = useState(false)
    const [logged, setLogged] = useState(undefined)

    useEffect(() => {
        let temas = Cookies.get('tema')
        if(temas == undefined){
            setTema("light")
        }
        let logged = Cookies.get('user')
        
        const status = false //Chama API para validação do Login

        setLogged(status)

    }, [])

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

    function alterarHamburguer(){
        setHamburguer(hamburguer=> !hamburguer)
    }
    return (
        <header className={styles.header}>

            <div className={`${styles.hamburger} ${hamburguer ? styles.open : ""}`} onClick={alterarHamburguer}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`${styles.menu} ${hamburguer ? styles.open : ""}`}>
                {logged == true &&
                    <>
                        <Link href="/profile" onClick={alterarHamburguer}>
                            Profile
                        </Link>
                        <Link href="/create-function" onClick={alterarHamburguer}>
                            Create function
                        </Link>
                        <Link href="/sign-out" onClick={alterarHamburguer}>
                            Sign out
                        </Link>
                    </>
                }
                {logged == false &&
                    <>
                        <Link href="/sign-in" onClick={alterarHamburguer}>
                            Sign In
                        </Link>
                        <Link href="/create-account" onClick={alterarHamburguer}>
                            Create account
                        </Link>
                    </>
                }
            </div>

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