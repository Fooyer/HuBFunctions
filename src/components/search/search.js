// Import Styles

import "./search.css"

// Import Frameworks

import { createClient } from '@supabase/supabase-js'
import { Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Select from 'react-select'

// Import Images

import imgSearch from "../../images/lupa.svg"
import imgAdd from "../../images/plus.svg"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

// Component Funciton

function SearchBar({setSearched,setDados,setLanguageProg}){

    // Cria um cliente de conexão com o banco de dados

    const supabaseUrl = "https://bfgjcqecgspzgfsfaawj.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ2pjcWVjZ3Nwemdmc2ZhYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODM3ODUsImV4cCI6MTk5Mjc1OTc4NX0.xsBsrZfNTc5huqPX2bBIGYgSfurupRzdSeW-H_OnuRQ"
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obter as opções de linguages diretamente do banco

    const [Languages, setLanguages] = useState([]);

    useEffect(() => {
        async function fetchLanguages(){

                let { data: languages, error } = await supabase.from('planguages').select('*')
                setLanguages(languages);

        };
        fetchLanguages();
    }, []);

    // Função de Pesquisa

    async function search(event){
        
        setSearched('loading')

        event.preventDefault()

        if (document.getElementById('searchContent').value === ""){

            setDados([])
            setSearched('')

            return 0
        }

        let languageSearch = document.getElementById('language-programming').value
        let SearchText = "%"+document.getElementById('searchContent').value.replace(" ","%")+"%"
        languageSearch = languageSearch+"functions"

        let { data: functions, error } = await supabase.from(languageSearch).select('*').ilike('title', SearchText)

        if (functions.length===0){setSearched('null'); setDados(functions); return 0}

        setDados(functions)
        setSearched('searched')

    }

    async function mudarLinguagem(){
        
        let linguagemProg = document.getElementById('language-programming').value

        let { data: languages, error } = await supabase.from('planguages').select('planguage').eq('id',linguagemProg)

        setLanguageProg(languages[0].planguage)
        setSearched('')
    }

    // HTML do site

    return (
        <Row className="mx-lg-5 mx-md-0 mx-1">
            <form className="mainSearch" onSubmit={search} action="" >
                
                    <Col xs="2" md="2" lg="1" className="addImage">

                        <a href="/criar-funcao"><img src={imgAdd} alt="function Add" id="addContent" /></a>

                    </Col>

                    <Col xs="6" md="5" lg="4" className="Search-bar">

                        <input placeholder="Search a function" id="searchContent" />

                    </Col>

                    <Col xs="2" md="3" lg="2">

                        <Select options={options} className="language-programming" />

                    </Col>

                    <Col xs="2" md="2" lg="1" className="Search-image">

                        <img src={imgSearch} id="img-search" alt="function search" onClick={search} />
                        
                    </Col>
                        
                
            </form>
        </Row>
    )

}

export default SearchBar;