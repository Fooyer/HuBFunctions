'use client'

import styles from './header.module.css';
import Cookies from 'js-cookie';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import LightDarkMode from '../light-dark-mode/light-dark-mode';

function Header(){
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const [tema, setTema] = useState(Cookies.get("tema"))
    const [hamburguer, setHamburguer] = useState(false)
    const [logged, setLogged] = useState(undefined)

    useEffect(() => {

        async function iniciarHeader(){
            let temas = Cookies.get('tema')

            if(temas == undefined){
                setTema("light")
            }

            const user = Cookies.get('user')
            const token = Cookies.get('token')

            const response = await fetch('https://hubfunctions.com/api/sign-in/validate-token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: user,
                    token: token
                }),
            })

            const resp = await response.json()
            
            const status = resp.success //Chama API para validação do Login

            setLogged(status)
        }

        iniciarHeader();

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
                {!matches && (
                    <>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                        <LightDarkMode alterarTema={alterarTema} tema={tema} />
                    </>
                )}
            </div>

            {matches && (
                <>
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
                    <LightDarkMode alterarTema={alterarTema} tema={tema} />
                </>
            )}
        </header>
    )
};

export default Header;