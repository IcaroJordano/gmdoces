import "./Home.css"
import NavBar from "../Elements/Home/NavBar"
import Text from "../Elements/Home/Text"
// import imagem from "../Elements/imagem.png"
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