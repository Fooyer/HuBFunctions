'use client'

import styles from './page.module.css';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export default function SignIn() {

  async function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const response = await fetch('https://hubfunctions.com/api/sign-in/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
      });

    const data = await response.json();

    if (data.success === true){
      let resp = data.response;

      toast.success('You are now logged in');

      Cookies.set('user', username, {expires: 7});
      Cookies.set('token', resp.token, {expires: 7});

      location.href = '/'
    } else {
      toast.error('Invalid username or password');
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>

        <h1>Sign in</h1>

        <input type="text" id="username" name="username" required placeholder='Username' />
        <input type="password" name="password" id='password' required placeholder='Password' />

        <button type='submit'>Confirm</button>

      </form>
    </div>
  );
}