import "./Apresentacao.css"
import produto from "./../Elements/produto.jpg"
function Apresentacao(){
    return(
        <div className="Apresentacao" >
                <div className="left">
                    <h4>See Collection</h4>
                    <p>OUR FINE HOME MADE CHOCOLATES</p>
                </div>
                <div className="right">
                    <div className="collection">
                    <a href=""><img src={produto} alt="" /></a>
                    <p>There are some redeming factors in greeink text</p>
                    </div>
                    <div className="collection">
                    <a href=""><img src={produto} alt="" /></a>
                    <p>There are some redeming factors in greeink text</p></div>            
                    <div className="collection">
                    <a href=""><img src={produto} alt="" /></a>
                    <p>There are some redeming factors in greeink text</p></div>

                </div>
        </div>
    )
}
export default Apresentacao