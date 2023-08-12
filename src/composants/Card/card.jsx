function Card({ id, title, cover }) {
    return (
        <div>
            <li key={id} className="home-card">
                <h2 className="home-card-title">{title}</h2>
                <img className="home-card-cover" src={cover} alt={'cover'} />
            </li>
        </div>
    )
}

export default Card