import arrowdown from "../../assets/composants/Dropdown/arrow-down.png"
import arrowup from "../../assets/composants/Dropdown/arrow-up.png"

import { useState } from 'react'

function Dropdown({ title, text }) {

    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="dropdown">
            <div onClick={() => setIsOpen(false)} className="dropdown__button">
                <div className="dropdown__container">
                    <h1 className="dropdown__title">{title}</h1>
                    <div>
                        <img className="dropdown__arrow-down" src={arrowdown} alt="Downwards arrow" /> 
                    </div>
                </div>
            </div>
        </div>
        
    ) : (
            <div className="dropdown">
                <div onClick={() => setIsOpen(true)} className="dropdown__button">
                    <div className="dropdown__container">
                        <h1 className="dropdown__title">{title}</h1>
                        <div>
                            <img className="dropdown__arrow-down" src={arrowup} alt="Upwards arrow" /> 
                        </div>
                    </div>    
                </div>
                <div className="dropdown__background">
                    <div className="dropdown__text">
                        {text}
                    </div>
                </div>
            </div>
        
    )
}

export default Dropdown