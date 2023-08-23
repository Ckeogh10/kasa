import { Link } from "react-router-dom"

function Card({ id, title, cover }) {

    return (
            <Link to={`/annonces/${id}`} className="home-card hover-effect">
                <div className="home-card__container">
                    <img className="home-card__cover" src={cover} alt="Le logement" />
                    <h2 className="home-card__title">{title}</h2>
                </div>
            </Link>
    )
}


export default Card