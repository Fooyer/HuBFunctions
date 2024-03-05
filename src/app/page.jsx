'use client'

import styles from "./page.module.css";

import { useState } from "react";

import SearchBar from "./components/searchBar/searchBar";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  function onSearch(event){
    event.preventDefault();



    console.log(searchTerm)
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBar}>
        <SearchBar onSearch={onSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
    </main>
  );
}
