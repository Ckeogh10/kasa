import  { annonces } from "../../data/annonces"

import { useParams } from "react-router-dom"

import Carrousel from "composants/Carrousel/carrousel";
import DropdownLarge from "composants/Dropdown-Large/dropdownlarge";
import Tags from "composants/Tags/tags";

function FicheLogement() {

    const { id } = useParams()
    let logement = annonces.find((logement) => logement.id === id)

    const equipments = <ul className='tags'>
                            {logement.equipments.map((tag) => {
                                return (
                                    <li className ="details__dropdown-equipment"key={logement.equipments}>{tag}</li>   
                                    )
                            })}
                        </ul> 

    return ( 
        <div className="main-wrapper">

            <div className="logement">
                <Carrousel
                    image={logement.pictures}
                />

                <article className="content">
                    <div className="information">
                        <div className="information__left">
                            <h2 className="information__left-title">
                                {logement.title}
                            </h2>
                            <div className="information__left-location">
                                {logement.location}
                            </div>
                            <Tags tags={logement.tags}/>
                            </div>
                        <div className="information__right">
                            <div className="information__right-host">
                                <div className="information__right-host__name">
                                    {logement.host.name}
                                </div>
                                <img src={logement.host.picture} alt="The host" className="information__right-host__img"/>
                            </div>
                            <div className="information__right-rating">
                                    {logement.rating}
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="details__dropdown">
                            <DropdownLarge 
                            title={"Description"}
                            text={logement.description}
                            />
                            <DropdownLarge 
                            title={"Équipements"}
                            text={equipments}
                            />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default FicheLogement