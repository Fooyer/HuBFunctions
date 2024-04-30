'use client'

import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Highlight from 'react-highlight'
import { useContext } from "react";

import SearchBar from "./components/searchBar/searchBar";
import { FunctionsContext } from "./context/FunctionsContext";
export default function Home() {
  const { codes } = useContext(FunctionsContext);

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
      {functions !== undefined && functions.map((func) => (
        <div key={func.id} className={styles.functionCard}>
          <h2>{func.title}</h2>
          <p>{func.function}</p>
          <p>{func.languageName}</p>
        </div>
      ))}

      {(functions === undefined || functions == '') && firstTime === false && 
        <div className={styles.main404}> 
          <h2>No functions found</h2>
        </div>
      }

    </main>
  );
}