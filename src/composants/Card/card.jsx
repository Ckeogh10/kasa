import { Link } from "react-router-dom"

function Card({ id, title, cover }) {
    return (
        <div className="home-card hover-effect">
            <Link to={`/:${id}`} key={id} className="home-card__container">
                <div className="home-card__cover" style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent , rgba(0, 0, 0, 0.7)), url("${cover}")`
                  }}>
                  </div>
                <h2 className="home-card__title">{title}</h2>  
            </Link>
        </div>

                
    )
}

export default Card