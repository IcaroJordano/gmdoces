import "./Text.css"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"



function Text() {
    return(
        <div className="Text">
            <h2>Sweek moments, frusheley backed with love</h2>
            <p>Customized cakes, treats and every thing sweet for all your special moments</p>
            <button>Shop Now</button>
            <div className="Links">
                <div className="Link">                
                    <FaFacebook></FaFacebook>
                </div>
                <div className="Link">
                    <FaLinkedin></FaLinkedin>
                </div>
                <div className="Link">
                    <FaInstagram></FaInstagram>
                </div>
            </div>
        </div>
    )
}
export default Text