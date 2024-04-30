'use client'

import styles from "./page.module.css";
import { useState } from "react";

import SearchBar from "./components/searchBar/searchBar";

export default function Home() {

  const [functions, setFunctions] = useState(undefined);
  const [firstTime, setFirstTime] = useState(true);

  function changeFunctions(newFunctions) {
    setFunctions(newFunctions);
    setFirstTime(false);
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBar}>
        <SearchBar setFunctions={changeFunctions} />
      </div>

      <div className={styles.functionList}>
        {functions !== undefined && functions.map((func) => (
          <div key={func.id} className={styles.functionCard}>
            <h2>{func.title}</h2>
            <p>{func.function}</p>
            <p>{func.languageName}</p>
          </div>
        ))}
      </div>

      {(functions === undefined || functions == '') && firstTime === false && 
        <div className={styles.main404}> 
          <h2>No functions found</h2>
        </div>
      }

    </main>
  );
}