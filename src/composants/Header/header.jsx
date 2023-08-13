import logo from"../../assets/composants/Header/logo.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logo__img" src={logo} alt="Kasa logo" />
            </div>
            
            <nav className="nav">
                <Link to="/" className="nav__accueil">Accueil</Link>
                <Link to="/A-Propos" className="nav__apropos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header