import activestar from "../../assets/composants/Rating/star_active.png"
import inactivestar from "../../assets/composants/Rating/star_inactive.png"

function Rating( { stars } ) {

    const activeStars = [];

    const inactiveStars = [];

    activeStars.length = (stars);

    inactiveStars.length = (5-stars);

    return (
        <div className="information__personal-rating">
            {activeStars.fill(0).map(() => <img src={activestar} alt="full rating star" className="information__personal-rating-star"/>) }
            {inactiveStars.fill(0).map(() => <img src={inactivestar} alt="empty rating star" className="information__personal-rating-star"/>) }  
        </div>
    )
}

export default Rating