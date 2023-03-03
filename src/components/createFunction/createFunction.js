// Import Styles

import "./createFunction.css"

// Import Frameworks

import { Col, Row } from "react-bootstrap";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";

// Component Description HTML Code

function CreateFunction(){

    function onChange(newValue) {
        console.log(newValue);
    }

    // HTML Code

    return (
        <>
            <Row className="screenCreateFunction">
                <Col xs="12" md="10" lg="8" className="formBox">

                    <form className="formAddNewFunction">


                    <div>
                        <label for="title">Título:</label>
                        <input name="tituloNewFunction" required />

                        <select required>
                            <option></option>
                        </select>
                    </div>

                        <AceEditor enableLiveAutocompletion={true} enableSnippets={true} mode="javascript" theme="tomorrow_night_eighties" onChange={onChange} editorProps={{ $blockScrolling: true }} fontSize={15} width={800} height="auto" className="textEditorFunction" />
                        
                        <textarea />

                    </form>

                </Col>
            </Row>
        </>
    )

}

export default CreateFunction;