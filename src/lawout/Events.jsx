import "./Events.css"
import CardEvent from "../Elements/CardEvent"

function Events(){
    return(
        <div className="Events" >
            <h1>------------------- EVENTOS ---------------------</h1>
            <div className="div">
                <CardEvent></CardEvent>
                <CardEvent></CardEvent>
                <CardEvent></CardEvent>
            </div>
        </div>
    )
}
export default Events