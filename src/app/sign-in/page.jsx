'use client'

import styles from './page.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function SignIn() {

  const navigate = useRouter()

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
      
    console.log(data)

    if (data.success === true){
      let resp = data.response;

      alert(resp.message);

      Cookies.set('user', username, {expires: 7});
      Cookies.set('token', resp.token, {expires: 7});

      location.href = '/'
    } else {
      alert('Invalid username or password');
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