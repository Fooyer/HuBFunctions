"use client";

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function SignOut() {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        Cookies.remove('user');
        Cookies.remove('token');

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            location.href = '/';
        }, 5000);

        // Cleanup function to clear interval and timeout on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Sign out</h1>
            <p className={styles.text}>You have been logged out</p>
            <p className={styles.text}>You will be redirected to the home page in {seconds} seconds...</p>
        </div>
    );
}
