'use client'

import styles from './page.module.css';

import { useRouter } from 'next/navigation';

export default function CreateAccount() {

  const navigate = useRouter();

  async function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch('https://hubfunctions.com/api/create-account/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, email: email, password: password }),
    });

    const resp = await response.json();

    if (resp.success === true) {
      alert('Account created');
      navigate.push('/sign-in');
    } else {
      alert(resp.response);
    }

  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>

        <h1>Create a new account</h1>

        <input type="text" id="username" name="username" required placeholder='Username' />
        <input type="text" id="email" name="email" required placeholder='Email' />
        <input type="password" name="password" id='password' required placeholder='Password' />
        <input type="password" name="confirmPassword" id='confirmPassword' required placeholder='Confirm Password' />

        <button type='submit'>Confirm</button>

      </form>
    </div>
  );
}