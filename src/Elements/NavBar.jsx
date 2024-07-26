import cake from "./cake.png"
import "./NavBar.css"


function NavBar(){
    return (
        <nav className="NavBar">
            <img src={cake} alt="" className="img"/>
            <div className="Links">
                <a href="youtube,com" className="img">Home</a>
                <a href="youtube,com">Shop</a>
                <a href="youtube,com">Servises</a>
                <a href="youtube,com">Blog</a>
            </div>
        </nav>
    )
}
export default NavBar