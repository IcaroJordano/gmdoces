import { CiHeart } from "react-icons/ci";

import "./CardShoping.modules.css"

function CardShoping({image,nome,preco,decricao}){
    return(
        <div className="card">
            <img src="https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>3-tier red velvet cake</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate facere inventore illo</p>
            <div>
                <p>$11.99</p>
                <CiHeart />
                <button className="add">Add</button>
            </div>
        </div>
    )
}
export default CardShoping