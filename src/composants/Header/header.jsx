import logo from"../../assets/composants/Header/logo.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <img className="logo" src={logo} alt="Kasa logo" />
            <nav className="nav">
                <Link to="/" className="nav__accueil">Accueil</Link>
                <Link to="/A-Propos" className="nav__apropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header