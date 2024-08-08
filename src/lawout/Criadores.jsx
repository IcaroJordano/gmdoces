import "./Criadores.css"
import CardCriador from "../Elements/CardCriador"

function Criadores(){
    return(
        <>
        <div className="Criadores">
            <h1 className="h1">---- CRIADORES -----</h1>
            <div className="cards">
                <CardCriador className="card" ></CardCriador>
                <CardCriador className="card"></CardCriador>
            </div>
        </div>
        </>
    )
}
export default Criadores