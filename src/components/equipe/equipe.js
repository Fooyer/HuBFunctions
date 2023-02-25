// Import Styles

import "./equipe.css"

// Frameworks Imports

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";

// Components Imports

import Card from "./card/card";

// Page Sobre HTML Code

function Equipe(){

    // Cria um ciente de conexão com o banco

    const supabaseUrl = "https://bfgjcqecgspzgfsfaawj.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ2pjcWVjZ3Nwemdmc2ZhYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODM3ODUsImV4cCI6MTk5Mjc1OTc4NX0.xsBsrZfNTc5huqPX2bBIGYgSfurupRzdSeW-H_OnuRQ"
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Pega as informações da equipe diretamente do banco

    const [Participantes, setParticipantes] = useState([]);

    useEffect(() => {
        async function fetchParticipantes(){

            let { data: participantes, error } = await supabase.from('participantes').select('*')
            setParticipantes(participantes);
            console.log(participantes)

        };
        fetchParticipantes();
    }, []);

    // Código HTML do site

    return ( <>

        <Row id="titlePosition">

            <Col xs="10" md="5" lg="3" id="boxTitle">

                <h1 id="titleTeam">Time</h1>

            </Col>

        </Row>

        <Row id="grid">

                {Participantes.map((element) => (

                    <Col xs="10" md="5" lg="3" id="card">

                        <Card />
                        
                    </Col>
    
                ))}

        </Row>

    </> )

}

export default Equipe;