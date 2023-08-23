import { useLocation} from "react-router-dom"

function Banner({ text, image }) {

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/");

    return (
        <section className="banner" key={image}>
           <div className={splitLocation[1] === "A-Propos" ? "banner__container banner__container-big" : "banner__container"}>
           <img className="banner__img" src={image} alt="Kasa banner"/>
                <div className="banner__text">{text}</div>
            </div>
        </section>
    )
}

export default Banner