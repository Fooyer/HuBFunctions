'use client'

import { createContext, useState } from "react";

import axios from "axios";

export const FunctionsContext = createContext({});

export function FunctionsContextProvider(props) {
    const [codes, setCodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function onSearch(event){
        event.preventDefault();
    
        const url = `http://localhost:3000/api/functions/find-function?functionString=${searchTerm}`;
    
        const { data } = await axios.get(url);
    
        setCodes(data);
      }
    
    return (
        <FunctionsContext.Provider value={{ codes, onSearch, searchTerm, setSearchTerm }}>
            {props.children}
        </FunctionsContext.Provider>
    );
}