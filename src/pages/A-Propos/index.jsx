import DropdownLarge from "../../composants/Dropdown-Large/dropdownlarge"

import Banner from "composants/Banner/banner"
import BannerAPropos from "assets/banner/BannerAPropos.png"

function APropos() {
    return (
        <div className="main-wrapper">
            <main>
                <Banner 
                text=""
                image={BannerAPropos}
                />
                <div className="apropos">
                    <DropdownLarge
                        title="Fiabilité"
                        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    />
                    <DropdownLarge
                        title="Respect"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <DropdownLarge
                        title="Service"
                        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                    <DropdownLarge
                        title="Securité"
                        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    /> 
                </div>
                 
            </main>
        </div>
    )
}

export default APropos