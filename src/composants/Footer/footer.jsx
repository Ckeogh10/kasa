import logo from "../../assets/composants/Footer/logo.png"

function Footer () {
    return (
        <footer>
            <div className="footer">
                <div className="footer__logo">
                    <img className="footer__img" src={logo} alt="Kasa footer logo" /> 
                </div>
                
                <div className="footer__text">
                    © 2020 Kasa. All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer