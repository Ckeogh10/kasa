import  { annonces } from "../../data/annonces"

import { useParams } from "react-router-dom"

import Carrousel from "composants/Carrousel/carrousel";

function FicheLogement() {

    const { id } = useParams()
    let logement = annonces.find((logement) => logement.id === id)

    return ( 
        <div className="main-wrapper">
            <Carrousel
            image={logement.pictures}
            />
        </div>
    )
}

export default FicheLogement