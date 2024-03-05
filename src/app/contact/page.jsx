// pages/contact.js

import Link from 'next/link';
import styles from './page.module.css';

function Contact(){
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1> <br />
      <p className={styles.description}>
        If you have any questions or need assistance, please don't hesitate to reach out to us through our contact form. We're here to help!
      </p>
      <div className={styles.team}>
        <h2 className={styles.teamTitle}>Social Media</h2>
        
        <div className={styles.socialList}>

          <div className={styles.member}>
            <h2 className={styles.memberName}>Telegram</h2>
            <p className={styles.memberRole}>Hub Functions</p>
          </div>

          <div className={styles.member}>
            <h2 className={styles.memberName}>Discord</h2>
            <p className={styles.memberRole}><Link target='_blank' href="https://discord.gg/fm9stJbg5e">Entrar no servidor</Link></p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;