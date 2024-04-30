'use client'

import { useContext } from 'react';
import styles from './page.module.css';

import { AuthContext } from '../context/AuthContext';

export default function Register() {
  const { setUsername, setEmail, setPassword, onLogin, email, password, username } = useContext(AuthContext);

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onLogin} className={styles.form}>
        <h1>Register new account</h1>
        <input 
          value={username}
          onChange={handleChangeUsername}
          type="text" 
          placeholder="Username"/>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}