import { useState } from "react"
import arrow_back from "../../assets/composants/Carrousel/arrow_back.png"
import arrow_forward from "../../assets/composants/Carrousel//arrow_forward.png"

function Carrousel(  {image} ) {

    let [x, setx] = useState(0)

    if (x < 0) {
        x = image.length-1
    } else if (x > image.length-1) {
        x = 0
    }

    return  (
        <div className="carrousel">

            <div className="carrousel__container">
                <img className="carrousel__image" src={image[x]} alt="Logement" />
                
                {image.length !==1 && 
                <div className="carrousel__arrow">
                <button className="carrousel__button" button onClick={() => setx(x-1)}>
                    <img src={arrow_back} alt="Backwards arrow" />
                </button>
                <button className="carrousel__button" button onClick={() => setx(x+1)}>
                    <img src={arrow_forward} alt="Forwards arrow" />
                </button>
                </div>
                }
                
                <div className="carrousel__text">
                    {x+1}/{image.length}
                </div>
                
            </div>
            
        </div> 
    )
    
}

export default Carrousel