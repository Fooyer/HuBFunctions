'use client'

import styles from './page.module.css';

export default function SignIn() {

  async function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const response = await fetch('http://localhost/hub/api/sign-in/', {
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

    localStorage.setItem('Usr', username);
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