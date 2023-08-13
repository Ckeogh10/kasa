function Card({ id, title, cover }) {
    return (
            <div key={id} className="home-card">
                <div className="home-card__cover-container">
                    <h2 className="home-card__title">{title}</h2>
                    <img className="home-card__cover" src={cover} alt={'cover'} /> 
                </div>
            </div>
    )
}

export default Card