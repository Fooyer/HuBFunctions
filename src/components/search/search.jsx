// Import Styles

import "./search.css"

// Import Frameworks

import { supabase } from "../../providers/supabase";
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Import Images

import imgSearch from "../../images/lupa.svg"
import imgAdd from "../../images/plus.svg"

// Component Funciton

function SearchBar({setSearched,setDados,setLanguageProg}){

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

        event.preventDefault()
        setSearched('loading')

        if (document.getElementById('searchContent').value === ""){

            setDados([])
            setSearched('')

            return 0
        }

        let languageSearch = document.getElementById('language-programming').value
        let SearchText = "%"+document.getElementById('searchContent').value.replace(" ","%")+"%"
        languageSearch = languageSearch+"functions"

        let { data: functions, error } = await supabase.from(languageSearch).select('*, profiles(username)').ilike('title', SearchText)
        if (functions.length===0){setSearched('null'); setDados(functions); return 0}

        setDados(functions)
        setSearched('searched')

    }

    // Função Para Mudar a linguagem de pesquisa

    async function mudarLinguagem(){
        
        let linguagemProg = document.getElementById('language-programming').value

        let { data: languages, error } = await supabase.from('planguages').select('planguage').eq('id',linguagemProg)

        setLanguageProg(languages[0].planguage)
        setSearched('')
    }

    // HTML do Componente

    return (
        <Row className="mx-lg-5 mx-md-0 mx-1">
            <form className="mainSearch" onSubmit={search} >
                
                    <Col xs="2" md="2" lg="1" className="addImage">

                        <Link to="/criar-funcao" className="linkCriarFuncao"><img src={imgAdd} alt="function Add" id="addContent" /></Link>

                    </Col>

                    <Col xs="6" md="4" lg="4" className="Search-bar">

                        <input placeholder="Pesquise uma função" id="searchContent" />

                    </Col>

                    <Col xs="2" md="3" lg="2">

                        <select className="language-programming" id="language-programming" onChange={mudarLinguagem}>

                            {Languages.map((element) => (
  
                                <option key={element.id} value={element.id} className='text-center'>{window.innerWidth > 768 ? element.planguage : element.sigla}</option>

                            ))}

                        </select>

                    </Col>

                    <Col xs="2" md="2" lg="1" className="Search-image">
                        <button onClick={search}>
                            <img src={imgSearch} id="img-search" alt="function search"/>
                        </button>
                        
                    </Col>
                        
                
            </form>
        </Row>
    )

}

export default SearchBar;