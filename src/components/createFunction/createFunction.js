// Import Styles

import "./createFunction.css"

// Import Frameworks

import { createClient } from '@supabase/supabase-js'
import { useEffect,useState } from "react";
import AceEditor from "react-ace";
import { useNavigate } from "react-router-dom";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";

// Component Description HTML Code

function CreateFunction(){

    const navigate = useNavigate();

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

    // Função de gravação no sistema para aprovação

    async function adicionarFuncao(event){

        event.preventDefault()
        
        let tituloFuncao = document.getElementById('titleNewFunction').value
        let codefuncao = descFunction
        let descricao = document.getElementById('descriptionNewFunction').value
        let languageValue = codeLanguage

        const { error } = await supabase.from('foraprove').insert({ title: tituloFuncao, function: codefuncao, description: descricao, language: languageValue })

        if (error!=null){
            console.log(error)
        } else{
            alert("Função enviada para aprovação")
            sessionStorage.removeItem('function')
            navigate("/")
        }

    }

    const [textareaValue, setTextareaValue] = useState('');

    const handleChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

    // HTML Code
    
    return (
        <>
            <div className="screenCreateFunction">
                <div className="formBox">

                    <div className="sectionTitleCreate">
                        <h1>Crie uma função e ajude a comunidade!</h1>
                    </div>

                    <div className="sectionForm">

                        <div className="card">
                
                            <div className="artigo-funcao">

                                <input type="text" placeholder="Título" maxLength={70} />

                                <div className="artigo-code">

                                    <AceEditor wrapEnabled={true} setOptions={{wrapBehavioursEnabled: true}} value={descFunction} enableLiveAutocompletion={false} enableSnippets={false} mode={mainLanguage} theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} className="textEditorFunction" />
                                    
                                </div>

                                <textarea value={textareaValue} onChange={handleChange} onInput={handleResize} rows={1} placeholder="Descrição" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CreateFunction;