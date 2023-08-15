function Banner({ text, image }) {

    return (
        
        <section className="banner">
           <div className="banner__container">
                <div className="banner__img" style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0.3)), url("${image}")`
                    
                    }}>
                </div>
                <div className="banner__text">{text}</div>
            </div>
        </section>
    )
}

export default Banner