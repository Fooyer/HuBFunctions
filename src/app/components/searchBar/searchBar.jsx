'use client'

import styles from './searchBar.module.css'; // Importa os estilos CSS

import { useEffect, useState } from 'react';
import MultiSelect from './multiSelect/multiselect'; // Importa o componente MultiSelect

function SearchBar({setFunctions}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [programmingLanguages, setProgrammingLanguages] = useState([]);;
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        async function getLanguages() {
            const response = await fetch('http://localhost/hub/api/programming_languages/get/');
            const data = await response.json();
            setProgrammingLanguages(data['response'])
        }
        getLanguages();
    }, []);

    function handleChange(event){
        setSearchTerm(event.target.value);
    };

    async function handleSubmit(event){
        event.preventDefault();

        const response = await fetch('http://localhost/hub/api/functions/search/?search_term=' + searchTerm + "&programming_languages=" + JSON.stringify(selectedOptions), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        if (data['response'] === undefined){
            setFunctions(undefined);
            return;
        }
        setFunctions(data['response']);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
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
            <div className={styles.multiselect}>
                <MultiSelect options={programmingLanguages} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
            </div>
        </form>
    );
};

export default SearchBar;