import  { annonces } from "../../data/annonces"

import { useParams, useNavigate } from "react-router-dom"

import Carrousel from "composants/Carrousel/carrousel";
import DropdownLarge from "composants/Dropdown-Large/dropdownlarge";
import Tags from "composants/Tags/tags";
import Rating from "composants/Rating/rating";
import { useEffect } from "react";

function FicheLogement() {

    const { id } = useParams();
    const navigate = useNavigate();
    let logement = annonces.find((logement) => logement.id === id)

    useEffect(() => {
        if (logement === undefined) {
        navigate('/')
    }
    })
    
    

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
                            <h2 className="information__location-text-title">
                                {logement.title}
                            </h2>
                            <p className="information__location-text-address">
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

                            <Rating rating={logement.rating} />

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