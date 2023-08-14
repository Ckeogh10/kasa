import { Link } from "react-router-dom"

function Card({ id, title, cover }) {
    return (
        <Link to={`/:${id}`} className="home-card">
            <div key={id} className="home-card__container">
                <h2 className="home-card__title">{title}</h2>
                <img className="home-card__cover" src={cover} alt={'cover'} /> 
            </div>
        </Link>    
    )
}

export default Card