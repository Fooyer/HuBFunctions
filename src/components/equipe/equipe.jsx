// Import Styles

import "./equipe.css"

// Frameworks Imports

import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from "../../providers/supabase";

// Components Imports

import Card from "./card/card";

// Page Sobre HTML Code

function Equipe(){

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
