import "./CardShoping.modules.css"

function CardShoping({image,nome,preco,decricao}){
    return(
        <div className="card">
            <img src="https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>3-tier red velvet cake</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate facere inventore illo, laboriosam autem nobis? Blanditiis voluptatibus, praesentium cupi</p>
            <div>
                <p>$11</p>
                <button className="like"></button>
                <button className="add">Add to Cart</button>
            </div>
        </div>
    )
}
export default CardShoping