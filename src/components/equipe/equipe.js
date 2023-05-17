// Import Styles

import "./equipe.css"

// Frameworks Imports

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

        };
        fetchParticipantes();
    }, []);

    // Código HTML do site

    return ( <>

        <div id="titlePosition">

            <div id="boxTitle">

                <h1 id="titleTeam">Team</h1>

            </div>
        </div>

        <section id="grid">

                {Participantes.map((participante) => (

                    <div id="card">

                        <Card participante={participante} />
                        
                    </div>
    
                ))}

        </section>

    </> )

}

export default Equipe;
