import "./header.css"

function Header() {

  return (
    <header>
        <a href='/' className="linkHeader"><h2>HUBFUNCTIONS</h2></a>
        <ul>
          <li><a className="linkHeader" href="/perfil">Perfil</a></li>
        </ul>
    </header>
  );
}


export default Header
