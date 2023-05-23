import "./header.css"

function Header({errorAuth}) {

  return (
    <header>
        <a href='/' className="linkHeader"><h2>HUBFUNCTIONS</h2></a>
        <ul>
          <li className="buttonDesignHeader">
            {errorAuth != null &&
              <a className="linkHeaderBut" href="/login">
                <div id="normalizer">
                  Login
                </div>
              </a>
            }
            {errorAuth === null &&
              <a className="linkHeaderBut" href="/perfil">
                <div id="normalizer">
                  Perfil
                </div>
              </a>
            }
          </li>
        </ul>
    </header>
  );
}


export default Header
