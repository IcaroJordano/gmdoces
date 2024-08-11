import "./CardCriador.modules.css"

function CardCriador(){
    return(
        <div className="CardCriador">
            <div className="top">
                <div className="user"></div>
                <div className="textos">
                    <h2>Bianca P</h2>
                    <p> Bratislava, Slovakia</p>
                </div>
            </div>
           <div className="bottom"> 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quis eum consequatur perspiciatis molestias exercitationem quo totam expedita nesciunt mollitia? Inventore, soluta repellendus.</p>
           </div>
        </div>
    )
}


export default CardCriador