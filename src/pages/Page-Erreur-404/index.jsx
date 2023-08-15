import { Link } from "react-router-dom"

function Error404() {
    return (
        <div className="error">
            <h1 className="error__number">404</h1>
            <div className="error__text">Oups! La page que vous demandez n'existe pas.</div>
            <Link to={`/`} className="error__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404