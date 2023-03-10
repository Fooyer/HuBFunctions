// Import Styles

import "./createFunction.css"

// Import Frameworks

import { useEffect,useState } from "react";
import { Col, Row } from "react-bootstrap";
import AceEditor from "react-ace";
import { createClient } from '@supabase/supabase-js'

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

    const [descFunction, setDescFunction] = useState('');

    // Salva a função no Session Storage

    function onChange(newValue) {
        sessionStorage.setItem('function', newValue);
    }

    // Se tiver função gravada no session storage ele recupera os dados

    useEffect(() => {

        let funcao = sessionStorage.getItem('function')
        setDescFunction(funcao)
        
    }, []);

    // Função Para Salvar o Cadastro

    function salvarCadastro(event){

        event.preventDefault()
        
        var title = document.getElementById('tituloNewFunction').value
        var descFunc = descFunction
        var descPost = document.getElementById('cadastroCampoDescricao').value
        var language = document.getElementById('languagePost').value

        console.log(title,descFunc,descPost,language)

    }

    // HTML Code
    
    return (
        <>
            <Row className="screenCreateFunction">
                <Col xs="12" md="10" lg="8" className="formBox">

                    <form className="formAddNewFunction" onSubmit={salvarCadastro}>

                        <div>
                            <label for="title">Título:</label>
                            <input name="tituloNewFunction" id="tituloNewFunction" required />

                            <select id="languagePost" required>

                                {Languages.map((element) => (

                                    <option value={element.id} className='text-center'>{window.innerWidth > 768 ? element.planguage : element.sigla}</option>

                                ))}

                            </select>
                        </div>

                        <AceEditor value={descFunction} enableLiveAutocompletion={true} enableSnippets={true} mode="javascript" theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} width={800} className="textEditorFunction" />
                            
                        <textarea rows={6} cols={70} className="cadastroCampoDescricao" id="cadastroCampoDescricao" />

                        <button type="submit" id="buttonConfirm"> Confirm </button>

                    </form>

                </Col>
            </Row>
        </>
    )

}

export default CreateFunction;