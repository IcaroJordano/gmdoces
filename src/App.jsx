import './App.css'
import Apresentacao from "./lawout/Apresentacao.jsx"
import Criadores from "./lawout/Criadores.jsx"
import Footer from "./lawout/Footer.jsx"
import Home from "./lawout/Home.jsx"
import Events from "./lawout/Events.jsx"
import Shoping from "./lawout/Shoping.jsx"
// import { useEffect } from 'react'

function App() {
  return (
    <div>
      <Home></Home>
      <Apresentacao></Apresentacao>
      <Shoping></Shoping>
      <Events></Events>
      <Criadores></Criadores>
      <Footer></Footer>
    </div>
  )
}

export default App
