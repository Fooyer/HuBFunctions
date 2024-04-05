'use client'

import { useContext } from 'react';
import styles from './page.module.css';

import { AuthContext } from '../context/AuthContext';

export default function SignIn() {
  const { setEmail, setPassword, onLogin, email, password } = useContext(AuthContext);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onLogin} className={styles.form}>
        <h1>Sign In</h1>
        <input 
          value={email}
          onChange={handleChangeEmail}
          type="text" 
          placeholder="Email"/>
        <input
          value={password}
          onChange={handleChangePassword}
          type="password"
          placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}