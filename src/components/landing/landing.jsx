// Import Styles

import "./landing.css"

// Import Frameworks

import imgHow from '../../images/howToSearch.gif'
import imgCreate from '../../images/imgCreate.gif'

// Component Description HTML Code

function LandingPage(){

    return (
        
        <section className="sectionLandings">
            
            <div className="sectionMain">
                <div className="sectionTitle">
                    <h1>Pesquise uma função</h1>
                </div>
                <div className="sectionGifs">
                    <img src={imgHow} width={1000} />
                </div>
            </div>

            <div className="sectionMain">
                <div className="sectionTitle">
                    <h1>Publique uma função</h1>
                </div>
                <div className="sectionGifs">
                    <img src={imgCreate} width={1000} />
                </div>
            </div>
        
        </section>

    )

}

export default LandingPage;