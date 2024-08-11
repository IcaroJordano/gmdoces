import "./Criadores.css"
import CardCriador from "../Elements/CardCriador"
import Titulo from "../Elements/Titulo"

function Criadores(){
    return(
        <>
        <div className="Criadores">
            <Titulo text={"CONFEITEIRAS"}></Titulo>
            <div className="cards">
                <CardCriador className="card" ></CardCriador>
                <CardCriador className="card"></CardCriador>
            </div>
        </div>
        </>
    )
}
export default Criadores