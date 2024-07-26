import "./Home.css"
import NavBar from "../Elements/NavBar"
import Text from "../Elements/Text"
import imagem from "../Elements/imagem.png"
function Home(){
    return(
        <div className="Home">
            <NavBar></NavBar>
                <div className="secao">
                    <Text className='Text'></Text>
                    {/* < img src="" alt="" /> */}
            </div>
        </div>
    )
}
export default Home