import logo from"../../assets/composants/Header/logo.png"

import { NavLink } from "react-router-dom"
import { useLocation} from "react-router-dom"

function Header() {

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/");

    return (
        <header>
            <div className="logo">
                <NavLink to="/"><img className="logo__img" src={logo} alt="Kasa logo" /></NavLink>
            </div>
            
            <nav className="nav">
                <NavLink to="/" className={splitLocation[1] === "" ? "nav__link-active" : "nav__link" }>Accueil</NavLink>
                <NavLink to="/A-Propos" className={splitLocation[1] === "A-Propos" ? "nav__link-active" : "nav__link" }>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header