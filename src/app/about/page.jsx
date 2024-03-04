// pages/about.js

import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1> <br />
      <p className={styles.description}>
        Hub Functions is an innovative platform designed to be the ultimate destination for programming functions in various languages. Our goal is to provide you with a comprehensive repository of useful, accessible, and organized functions to enhance the efficiency and productivity of your development projects.
        <br /> <br />
        With Hub Functions, you can explore a wide range of functions available in multiple programming languages, from Python and JavaScript to C++ and Java, and beyond. Our intuitive interface allows you to easily search for the functions you need using our smart search bar.
      </p>
      <div className={styles.team}>
        <h2 className={styles.teamTitle}>Our Team</h2>
        <div className={styles.member}>
          <h2 className={styles.memberName}>Freddy Albert Baier</h2>
          <p className={styles.memberRole}>Full-Stack Developer</p>
          <p className={styles.memberDescription}>
            Creator and full-stack developer of Hub Functions.
          </p>
        </div>
        <div className={styles.member}>
          <h2 className={styles.memberName}>Gabriel Ribeiro Santos</h2>
          <p className={styles.memberRole}>Full-Stack Developer</p>
          <p className={styles.memberDescription}>
            Full-stack developer of Hub Functions.
          </p>
        </div>
      </div>
    </div>
  );
}
