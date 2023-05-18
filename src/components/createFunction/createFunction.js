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
    const [confirmacao, setConfirmacao] = useState(false)

    useEffect(() => {
        async function fetchLanguages(){

                let { data: languages, error } = await supabase.from('planguages').select('*')
                setLanguages(languages);

        };
        fetchLanguages();
    }, []);


    
    // Consts de linguagem e função

    const [mainLanguage, setmainLanguage] = useState('');
    const [descFunction, setDescFunction] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('1');

    // Salva a função no Session Storage

    function onChange(newValue) {
        sessionStorage.setItem('function', newValue);
        setDescFunction(newValue)
    }

    async function changeLanguage(){

        var language = document.getElementsByName('selector')
        for (var i = 0; i < language.length; i++) {
            if (language[i].checked) {
              var linguagem = language[i].value
              let { data: languages, error } = await supabase.from('planguages').select('id').eq('planguage',linguagem)

              setCodeLanguage(languages[0].id)
              setmainLanguage(linguagem)
              let funcao = sessionStorage.getItem('function')
              setDescFunction(funcao)
              break
            }
        }
    }

    // Se tiver função gravada no session storage ele recupera os dados

    useEffect(() => {

        let funcao = sessionStorage.getItem('function')
        setDescFunction(funcao)
        
    }, []);

    // Função de gravação no sistema para aprovação

    function adicionarFuncao(event){

        event.preventDefault()
        
        if (mainLanguage===''){
            alert("Escolha uma linguagem!")
            return 0
        }
        console.log(descFunction)
        if (descFunction === '' || descFunction === null || descFunction.replace(/\s/g, "") === ''){
            alert("Escreva uma função!")
            return 0 
        }

        setConfirmacao(true)

    }
    async function efetuarAdicao(){

        setConfirmacao(false)

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

    // Campo responsivo

    const handleResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

    // HTML Code
    
    return (
        <>
            {confirmacao && 
                <div className="divConfirmaCriacao">
                    <div className="confirmationDiv">

                        <h1>Você aceita os Termos?</h1>

                        <ul>
                            <li>Declaro que aceito a exposição pública no site HUBFUNCTIONS da função criada por mim.</li>
                            <li>Estou ciente de que minha função pode ser excluída pelos administradores a qualquer momento.</li>
                            <li>Estou ciente de que o título da postagem pode ser alterado pelos administradores para eventuais melhoras na busca.</li>
                        </ul>

                        <div>
                            <button onClick={efetuarAdicao}>Aceito</button>
                            <button onClick={() => setConfirmacao(false)}>Rejeito</button>
                        </div>

                    </div>
                </div>
            }
            <div className="screenCreateFunction">
                <div className="formBox">

                    <div className="sectionTitleCreate">
                        <h1>Crie uma função e ajude a comunidade!</h1>
                    </div>

                    <form className="sectionForm" onSubmit={adicionarFuncao}>

                        <div className="card">
                
                            <div className="artigo-funcao">

                                <input id="titleNewFunction" type="text" placeholder="Título" maxLength={70} required/>

                                <div class="radio-selector">
                                    <input type="radio" id="option1" name="selector" value="javascript" onChange={changeLanguage} />
                                    <label for="option1">javascript</label>
                                    <input type="radio" id="option2" name="selector" value="python" onChange={changeLanguage} />
                                    <label for="option2">python</label>
                                </div>

                                <div className="artigo-code">

                                    <AceEditor enableBasicAutocompletion={true} enableLiveAutocompletion={true} height={450} value={descFunction} enableSnippets={false} mode={mainLanguage} theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} className="textEditorFunction" />
                                    
                                </div>

                                <textarea id="descriptionNewFunction" onInput={handleResize} rows={1} placeholder="Descrição" required/>

                                <button type="submit" className="submitCreateFunction">Publicar Função</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default CreateFunction;