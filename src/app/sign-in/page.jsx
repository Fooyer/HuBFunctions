import styles from './page.module.css';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}