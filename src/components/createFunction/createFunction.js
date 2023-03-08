// Import Styles

import "./createFunction.css"

// Import Frameworks

import { useEffect,useState } from "react";
import { Col, Row } from "react-bootstrap";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";

// Component Description HTML Code

function CreateFunction(){

    const [mainLanguage, setmainLanguage] = useState('javascript');

    const [descFunction, setDescFunction] = useState('');

    // Salva a função no Session Storage

    function onChange(newValue) {
        sessionStorage.setItem('function', newValue);
    }

    function changeLanguage(){

        let linguagem = document.getElementById('selectionLanguage').value

        console.log(linguagem)

        setmainLanguage(linguagem)

    }

    // Se tiver função gravada no session storage ele recupera os dados

    useEffect(() => {

        let funcao = sessionStorage.getItem('function')
        setDescFunction(funcao)
        
    }, []);

    // HTML Code
    
    return (
        <>
            <Row className="screenCreateFunction">
                <Col xs="12" md="10" lg="8" className="formBox">

                    <form className="formAddNewFunction">


                    <div>
                        <label for="title">Título:</label>
                        <input name="tituloNewFunction" required />

                        <select onChange={changeLanguage} id="selectionLanguage" required>
                            <option value="javascript">javascript</option>
                            <option value="python">python</option>
                        </select>
                    </div>

                        <AceEditor value={descFunction} enableLiveAutocompletion={false} enableSnippets={false} mode={mainLanguage} theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} width={800} height="auto" className="textEditorFunction" />
                        
                        <textarea />

                    </form>

                </Col>
            </Row>
        </>
    )

}

export default CreateFunction;