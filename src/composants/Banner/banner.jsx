function Banner({ text, image }) {

    return (
        <section className="banner" key={image}>
           <div className="banner__container">
                <img className="banner__img" src={image} alt="Kasa banner"/>
                <div className="banner__text">{text}</div>
            </div>
        </section>
    )
}

export default Banner