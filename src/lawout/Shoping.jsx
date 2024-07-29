import "./Shoping.css"
import CardShoping from "./../Elements/CardShoping"

function Shoping(){
    return(
        <div className="Shoping" >
            <h1>------------------- SHOPPING ---------------------</h1>
            <a href="">See  All</a>
            <div className="cards">
                <CardShoping></CardShoping>
                <CardShoping></CardShoping>
                <CardShoping></CardShoping>
                {/* <CardShoping></CardShoping>
                <CardShoping></CardShoping> */}
        </div>
            </div>
    )
}
export default Shoping