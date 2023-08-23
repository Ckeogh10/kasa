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

                <Carrousel image={logement.pictures} />

                <div className="information">

                    <div className="information__location">
                        
                        <div className="information__location-text">
                            <h2 className="information__location-title">
                                {logement.title}
                            </h2>
                            <p className="information__location-address">
                                {logement.location}
                            </p>  
                        </div>

                        <Tags tags={logement.tags}/>

                    </div>

                    <div className="information__personal">
                        
                        <div className="information__personal-host">

                                <div className="information__personal-host__name">
                                    {logement.host.name}
                                </div>

                                <img src={logement.host.picture} alt="The host" className="information__personal-host__img"/>
                                                    
                            </div> 

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