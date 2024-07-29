import "./Footer.css"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function Footer(){
    return(
        <>
            <div className="Footer">
                <div className="left">
                    <div className="footerText">
                        
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus omnis perspiciatis nesciunt nam voluptas provident consequuntur vero, et iure facilis! Quas ducimus minus, est fugit alias laboriosam nostrum unde sint!</p>
                    </div>
                    <div className="icons_footer">
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
                </div>
                <div className="right">
                    <div className="linksFooter">
                        <div className="links">
                            <h4>OUR STORES</h4>
                            <a href="">SLOVAKIA</a>
                            <a href="">CZECH REaUBLIC</a>
                            <a href="">FINLAND</a>
                            <a href="">POLAND</a>
                        </div>
                        <div className="links">
                            <h4>USEFULL</h4>
                            <a href="">HOME</a>
                            <a href="">PRIVAY POLICY</a>
                            <a href="">TERMS CONDITIONS</a>
                            <a href="">CONTACT US</a>
                        </div>
                        {/* <div className="links">.</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer