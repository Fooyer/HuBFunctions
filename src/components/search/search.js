// Import Styles

import "./search.css"

// Importar Conexão com Banco

import { createClient } from '@supabase/supabase-js'

// Import Frameworks

import { Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

// Import Images

import imgSearch from "../../images/lupa.svg"

// Component Funciton

function SearchBar(){

    // Cria um cliente de conexão com o banco de dados

    const supabaseUrl = "https://bfgjcqecgspzgfsfaawj.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ2pjcWVjZ3Nwemdmc2ZhYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODM3ODUsImV4cCI6MTk5Mjc1OTc4NX0.xsBsrZfNTc5huqPX2bBIGYgSfurupRzdSeW-H_OnuRQ"
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obter as opções de linguages diretamente do banco

    const [Languages, setLanguages] = useState([]);
    let languages;

    useEffect(() => {
        const fetchLanguages = async () => {
            
            if (!languages){

                let { data: languages, error } = await supabase.from('planguages').select('planguage')
                setLanguages(languages);

            }

        };
        fetchLanguages();
      }, []);

      // HTML do site

    return (

            <form className="mainSearch">

                <Col xs="9" md="9" lg="4" className="Search-bar">

                    <input placeholder="Search a function"/>

                </Col>

                <Col xs="3" md="4" lg="2">

                    <select className="language-programming">

                    {Languages.map((element) => (

                        <option>{element.planguage}</option>

                    ))}

                    </select>

                </Col>

                <Col xs="1" md="1" lg="1" className="Search-image">

                    <img src={imgSearch} id="img-search" alt="function search"/>
                    
                </Col>

            </form>

    )

}

export default SearchBar;