// Import Styles

import "./search.css"

// Importar Conexão com Banco

import { createClient } from '@supabase/supabase-js'

// Import Frameworks

import { Col } from 'react-bootstrap';

// Import Images

import imgSearch from "../../images/lupa.svg"

// Component Funciton

function SearchBar(){

    const supabaseUrl = "https://bfgjcqecgspzgfsfaawj.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ2pjcWVjZ3Nwemdmc2ZhYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODM3ODUsImV4cCI6MTk5Mjc1OTc4NX0.xsBsrZfNTc5huqPX2bBIGYgSfurupRzdSeW-H_OnuRQ"
    const supabase = createClient(supabaseUrl, supabaseKey)

    async function searchLanguages(){

        let { data: languages, error } = await supabase.from('planguages').select('planguage')

            console.log(languages)
        }

    return (

            <form className="mainSearch">

                <Col xs="9" md="9" lg="4" className="Search-bar">

                    <input placeholder="Search a function"/>

                </Col>

                <Col xs="3" md="4" lg="2">

                    <select className="language-programming">

                        <option>Javascript</option>
                        <option>Python</option>
                        <option>Php</option>
                        <option>C#</option>

                    </select>

                </Col>

                <Col xs="1" md="1" lg="1" className="Search-image">

                    <img src={imgSearch} id="img-search" alt="function search" onClick={searchLanguages}/>
                    
                </Col>

            </form>

    )

}

export default SearchBar;