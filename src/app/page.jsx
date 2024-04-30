'use client'

import styles from "./page.module.css";

import SearchBar from "./components/searchBar/searchBar";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <div className={styles.codeBlock}>

      </div>
    </main>
  );
}
