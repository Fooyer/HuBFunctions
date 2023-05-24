import "./createdFunctions.css"

import { supabase } from "../../providers/supabase";
import { useEffect, useState } from "react";
import Card from "./card/card";


function CreatedFunctions(){

    const [ mainLanguage, setMainLanguage ] = useState('javascript');
    const [ codeLanguage, setCodeLanguage ] = useState('1');
    const [ functions, setFunctions ] = useState([])
    const [ dataSecao, setDataSecao ] = useState([])

    useEffect(() => {
        async function obterUsuarioSessao(){
            const { data, error } = await supabase.auth.getSession()
            setDataSecao(data)

            const { data: data2, error: error2 } = await supabase.from('1functions').select('*').in('id', data.session.user.user_metadata.criadas)
            console.log(data2)

            setFunctions(data2)
        }
        obterUsuarioSessao()
    },[])

    useEffect(() => {
        if (!dataSecao.session){return}
        async function obterFuncoes(){
            const { data, error } = await supabase.from(codeLanguage+'functions').select('*').in('id', dataSecao.session.user.user_metadata.criadas)
            setFunctions(data)
        }
        obterFuncoes()
    },[mainLanguage])

    async function changeLanguage(){

        var language = document.getElementsByName('selector')
        for (var i = 0; i < language.length; i++) {
            if (language[i].checked) {
              var linguagem = language[i].value
              let { data: languages, error } = await supabase.from('planguages').select('id').eq('planguage',linguagem)

              setMainLanguage(linguagem)
              setCodeLanguage(languages[0].id)
              break
            }
        }
    }

    return (
        <div className="createdFunctionsMain">

            <div class="radio-selector" id="radioSalvas">
                <input type="radio" id="option1" name="selector" value="javascript" onChange={changeLanguage} />
                <label for="option1">javascript</label>
                <input type="radio" id="option2" name="selector" value="python" onChange={changeLanguage} />
                <label for="option2">python</label>
            </div>

            {functions.map((element) => (
                <Card key={element.id} functionData={element} language={mainLanguage} />
            ))}

        </div>
    )

}

export default CreatedFunctions;