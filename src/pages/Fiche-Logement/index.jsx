import  { annonces } from "../../data/annonces"

import { useParams } from "react-router-dom"

import Carrousel from "composants/Carrousel/carrousel";
import DropdownLarge from "composants/Dropdown-Large/dropdownlarge";
import Tags from "composants/Tags/tags";
import Rating from "composants/Rating/rating";

function FicheLogement() {

    const { id } = useParams()
    let logement = annonces.find((logement) => logement.id === id)

    const equipments = <ul className ="details__dropdown-equipment">
                            {logement.equipments.map((tag) => {
                                return (
                                    <li key={tag}>{tag}</li>   
                                )
                            })}
                        </ul> 

    return ( 
        <div className="main-wrapper">

            <article className="content">

                <Carrousel
                    image={logement.pictures}
                />

                <div className="information">

                    <div className="information__text">
                        
                        <div className="information__text-location">
                            <h2 className="information__text-title">
                                {logement.title}
                            </h2>
                            <p className="information__text-address">
                                {logement.location}
                            </p>  
                        </div>

                        <div className="information__text-host">

                                <div className="information__text-host__name">
                                    {logement.host.name}
                                </div>

                                <img src={logement.host.picture} alt="The host" className="information__text-host__img"/>
                                                
                        </div>  

                    </div>

                    <div className="information__icons">

                        <Tags tags={logement.tags}/>

                        <Rating stars={logement.rating} />

                    </div>

                </div>

                <div className="logement-dropdown">
                        
                    <DropdownLarge 
                    title={"Description"}
                    text={logement.description}
                    />
                    <DropdownLarge 
                    title={"Équipements"}
                    text={equipments}
                    />
                </div>
                    
            </article>
            
        </div>
    )
}

export default FicheLogement