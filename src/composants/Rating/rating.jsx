import activestar from "../../assets/composants/Rating/star_active.png"
import inactivestar from "../../assets/composants/Rating/star_inactive.png"

function Rating( { rating } ) {

    const stars = [1, 2, 3, 4, 5];

    return (

        <div className="information__personal-rating">
            {stars.map((star) => rating >= star ? (
                <img src={activestar} key={star.toString()} alt="full rating star" className="information__personal-rating-star"/>
            ) : (
                <img src={inactivestar} key={star.toString()} alt="empty rating star" className="information__personal-rating-star"/>
            )
            )}
        </div>
    )
}

export default Rating