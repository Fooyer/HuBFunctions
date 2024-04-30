'use client'

import styles from './searchBar.module.css'; // Importa os estilos CSS

import { useState } from 'react';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event){
        setSearchTerm(event.target.value);
    };

    return (
        <form className={styles.container}>
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