// Import Styles

import "./card.css"

// Import Frameworks

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";


// Component Funciton

function Card({title,dfunction,description,planguage}){

    return (

        <div className="card">
            
            <div className="artigo-funcao">

                <h2>{title}</h2>

                <div className="artigo-code">

                    <AceEditor showGutter={false} highlightActiveLine={false} mode="javascript" theme="tomorrow_night_eighties" value={dfunction} editorProps={{ $blockScrolling: true }} fontSize={15} width={800} className="textEditorFunction" readOnly={true} />
                    
                </div>

                <p>{description}</p>

            </div>

        </div>

    )

}

export default Card;