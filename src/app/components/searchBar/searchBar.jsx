'use client'

import styles from './searchBar.module.css'; // Importa os estilos CSS

import { useContext } from "react";
import { FunctionsContext } from '../../context/FunctionsContext';

function SearchBar() {
    const { onSearch, searchTerm, setSearchTerm } = useContext(FunctionsContext);

    function handleChange(event){
        setSearchTerm(event.target.value);
    };

    return (
        <form onSubmit={onSearch} className={styles.container}>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search for the function you want..."
                    value={searchTerm}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Search</button>
            </div>
        </form>
    );
};

export default SearchBar;