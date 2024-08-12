'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import toast from "react-hot-toast";

export default function Profile() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("")

  useEffect(() => {
    async function obterInfoUsuario() {

      const user = Cookies.get("user");
      const token = Cookies.get("token");

      const response = await fetch("https://hubfunctions.com/api/obterUsuario/?user=" + user + "&token=" + encodeURIComponent(token));
      const result = await response.json();

      if (result.status === false) {
        router.push("/sign-in");
      } else {
        setName(user);
        setEmail(result.data[0].email);
      }
    }

    obterInfoUsuario();
    
  }, []);

  async function submit(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
      user: form.name.value,
      password: form.password.value,
      newpassword: form.newpassword.value,
    };

    const response = await fetch("https://hubfunctions.com/api/alterarProfile/", {
      method: "PUT",
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success === false) {
      toast.error(result.message);
    }
    else {
      toast.success(result.message);
    }
    clearFields();
  }

  function SignOut() {
    router.push("/sign-out");
  }

  function clearFields(){
    setPassword("");
    setNewPassword("");
    setRepeatNewPassword("");
  }

  return (
    <main className={styles.main}>
        <div className={styles.profile}>
          <button className={styles.button} onClick={SignOut}>Sign out</button>
          <button className={styles.button}>Delete account</button>
        </div>

        <section className={styles.sectionMain}>

          <h2>Personal Information:</h2>

          <form className={styles.formularioPersonal} onSubmit={submit}>

            <div className={styles.basicInformation}>

              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} disabled={true} onChange={e => setName(e.target.value)} />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} disabled={true} onChange={e => setEmail(e.target.value)} />
              </div>

            </div>
            
            <div className={styles.chanchepassword}>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              
              <div>
                <label htmlFor="newpassword">New Password:</label>
                <input type="password" id="newpassword" name="newpassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              </div>

              <div>
                <label htmlFor="confirmnewpassword">Confirm New Password:</label>
                <input type="password" id="confirmnewpassword" name="confirmnewpassword" value={repeatNewPassword} onChange={e => setRepeatNewPassword(e.target.value)} />
              </div>
            </div>

            <div className={styles.buttons}>
              <button type={"submit"} className={styles.saveButton}>
                Submit
              </button>
              <button type={"reset"} onClick={clearFields} className={styles.cancelButton}>
                Cancel
              </button>
            </div>

          </form>

        </section>
    </main>
  );
}