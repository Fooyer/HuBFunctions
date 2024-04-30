'use client'

import { useContext } from 'react';
import styles from './page.module.css';

import { AuthContext } from '../context/AuthContext';

<<<<<<< HEAD
  function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username + '/' + password);
=======
export default function SignIn() {
  const { setEmail, setPassword, onLogin, email, password } = useContext(AuthContext);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
>>>>>>> c5588e5b604a720b20cf70f3d0bc004e682398cf
  }

  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <form className={styles.form} onSubmit={submit}>

        <h1>Sign in</h1>

        <input type="text" id="username" name="username" required placeholder='Username' />
        <input type="password" name="password" id='password' required placeholder='Password' />

        <button type='submit'>Confirm</button>

=======
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
>>>>>>> c5588e5b604a720b20cf70f3d0bc004e682398cf
      </form>
    </div>
  );
}