// Import Styles

import "./sobre.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Imports

import { supabase } from "../../providers/supabase";
import Card from "./card/card";
import { useEffect, useState } from "react";

// Page About Code

function Sobre(){

    // Initialize useState variables

    const [Participantes, setParticipantes] = useState([]);

    // Take Creator Information from Data Base

    useEffect(() => {
        async function fetchParticipantes(){

            let { data: participantes, error } = await supabase.from('participantes').select('*')
            setParticipantes(participantes);

        };
        fetchParticipantes();
    }, []);

    // HTML Code

    return (
        <div className="App">

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

        </div>
    )

}

export default Sobre;