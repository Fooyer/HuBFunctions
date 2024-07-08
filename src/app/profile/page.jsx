'use client'

import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Profile() {

  const router = useRouter();

  useEffect(() => {
    async function getProfile() {

      const response = await fetch("/api/profile/get/");

      const result = await response.json();

      

      
    }

    getProfile();
  }, []);

  async function submit(event) {
    event.preventDefault();

    const form = event.target;

    const data = new FormData(form);

    const response = await fetch("/api/alterarprofile/", {
      method: "POST",
      body: data
    });

    const result = await response.json();

    console.log(result);
  }

  function SignOut() {
    router.push("/sign-out");
  }

  return (
    <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.person}>
            <img src="https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg" alt="" />
            <h3>Jonh Doe</h3>
          </div>

          <button className={styles.button} onClick={SignOut}>Sign out</button>
          <button className={styles.button}>Delete account</button>
        </div>

        <section className={styles.sectionMain}>

          <h2>Personal Information:</h2>

          <form className={styles.formularioPersonal} onSubmit={submit}>

            <div className={styles.basicInformation}>

              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>

            </div>
            
            <div className={styles.chanchepassword}>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              
              <div>
                <label htmlFor="newpassword">New Password:</label>
                <input type="password" id="newpassword" name="newpassword" />
              </div>

              <div>
                <label htmlFor="confirmnewpassword">Confirm New Password:</label>
                <input type="password" id="confirmnewpassword" name="confirmnewpassword" />
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={styles.saveButton}>
                Submit
              </button>
              <button className={styles.cancelButton}>
                Cancel
              </button>
            </div>

          </form>

        </section>
    </main>
  );
}