'use client'

import styles from "./page.module.css";

import Highlight from 'react-highlight'
import { useContext } from "react";

import SearchBar from "./components/searchBar/searchBar";
import { FunctionsContext } from "./context/FunctionsContext";

export default function Home() {
  const { codes } = useContext(FunctionsContext);

  return (
    <main className={styles.main}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <div className={styles.codeBlock}>
        {codes.map((code, index) => (
          <div key={index} className={styles.codeInformation}>
            <div className={styles.codeTitles}>
              <p>{code.title}</p>
              <p>{code.language}</p>
            </div>
            <Highlight>{code.code.toString()}</Highlight>
          </div>
        ))}
      </div>
    </main>
  );
}
