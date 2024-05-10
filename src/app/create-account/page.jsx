'use client'

import styles from './page.module.css';

export default function submit(event) {

  function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(username + '/'+ email + '/' + password);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>

        <h1>Register new account</h1>

        <input type="text" id="username" name="username" required placeholder='Username' />
        <input type="text" id="email" name="email" required placeholder='Email' />
        <input type="password" name="password" id='password' required placeholder='Password' />

        <button type='submit'>Confirm</button>

      </form>
    </div>
  );
}