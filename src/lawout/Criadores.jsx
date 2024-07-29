import "./Criadores.css"
import CardCriador from "../Elements/CardCriador"

function Criadores(){
    return(
        <>
        <div className="Criadores">
            <h1>------------------- CRIADORES ---------------------</h1>
            <div className="cards">
                <CardCriador></CardCriador>
                <CardCriador></CardCriador>
            </div>
        </div>
        </>
    )
}
export default Criadores