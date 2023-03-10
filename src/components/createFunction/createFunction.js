// Import Styles

import "./createFunction.css"

// Import Frameworks

import { createClient } from '@supabase/supabase-js'
import { useEffect,useState } from "react";
import { Col, Row } from "react-bootstrap";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";

// Component Description HTML Code

function CreateFunction(){

    // Cria um cliente com o banco

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


    
    // Consts de linguagem e função

    const [mainLanguage, setmainLanguage] = useState('javascript');
    const [descFunction, setDescFunction] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('1');

    // Salva a função no Session Storage

    function onChange(newValue) {
        sessionStorage.setItem('function', newValue);
        setDescFunction(newValue)
    }

    async function changeLanguage(){

        let linguagem = document.getElementById('selectionLanguage').value

        let { data: languages, error } = await supabase.from('planguages').select('id').eq('planguage',linguagem)

        setCodeLanguage(languages[0].id)
        setmainLanguage(linguagem)
        let funcao = sessionStorage.getItem('function')
        setDescFunction(funcao)

    }

    // Se tiver função gravada no session storage ele recupera os dados

    useEffect(() => {

        let funcao = sessionStorage.getItem('function')
        setDescFunction(funcao)
        
    }, []);

    // Função de gravação no sistema

    async function adicionarFuncao(event){

        event.preventDefault()
        
        let tituloFuncao = document.getElementById('titleNewFunction').value
        let codefuncao = descFunction
        let descricao = document.getElementById('descriptionNewFunction').value
        let languageValue = codeLanguage // Testar, mas em tese funciona

        const { error } = await supabase.from(languageValue+'functions').insert({ title: tituloFuncao, function: codefuncao, description: descricao })

        if (error!=null){
            console.log(error)
        } else{
            alert("sucess")
            sessionStorage.removeItem('function')
        }

    }

    // HTML Code
    
    return (
        <>
            <Row className="screenCreateFunction">
                <Col xs="12" md="10" lg="8" className="formBox">

                    <form className="formAddNewFunction" onSubmit={adicionarFuncao}>


                    <div>
                            <label for="title" id="labelTitleNewFunction">Título: </label>
                        <input name="tituloNewFunction" id="titleNewFunction" required />

                            <select onChange={changeLanguage} id="selectionLanguage" required>
                                <option value="javascript">javascript</option>
                                <option value="python">python</option>
                        </select>
                    </div>

                            <AceEditor value={descFunction} enableLiveAutocompletion={false} enableSnippets={false} mode={mainLanguage} theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} width={800} height="auto" className="textEditorFunction" />
                        
                        <div id="divDescricao">
                            <label for="description" id="labelTitleNewFunction" >Descrição: </label>
                            <textarea name="description" id="descriptionNewFunction" />
                        </div>

                        <button type="submit" id="botaoSubmit" > Submit </button>

                    </form>

                </Col>
            </Row>
        </>
    )

}

export default CreateFunction;