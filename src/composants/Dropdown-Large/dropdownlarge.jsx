import arrowdown from "../../assets/composants/Dropdown/arrow-down.png"
import arrowup from "../../assets/composants/Dropdown/arrow-up.png"

import { useState } from 'react'

function DropdownLarge({ title, text }) {

    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="dropdown-large">
            <button onClick={() => setIsOpen(false)} className="dropdown-large__button">
                <div className="dropdown-large__container">
                    <h1 className="dropdown-large__title">{title}</h1>
                    <div>
                        <img className="dropdown-large__arrow-down" src={arrowdown} alt="Downwards arrow" /> 
                    </div>
                </div>
            </button>
        </div>
        
    ) : (
            <div className="dropdown-large">
                <button onClick={() => setIsOpen(true)} className="dropdown-large__button">
                    <div className="dropdown-large__container">
                        <h1 className="dropdown-large__title">{title}</h1>
                        <div>
                            <img className="dropdown-large__arrow-down" src={arrowup} alt="Upwards arrow" /> 
                        </div>
                    </div>    
                </button>
                <div className="dropdown-large__background">
                    <div className="dropdown-large__text">
                        {text}
                    </div>
                </div>
                
            </div>
        
    )
}

export default DropdownLarge