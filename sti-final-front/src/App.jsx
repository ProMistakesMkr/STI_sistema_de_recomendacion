import { Cuestionario1 } from "./paginas/Cuestionario1"
import { Cuestionario2 } from "./paginas/Cuestionario2"
import { Cuestionario3 } from "./paginas/Cuestionario3"
import { Cuestionario4 } from "./paginas/Cuestionario4"
import { Home } from "./paginas/Home"
import { Login } from "./paginas/Login"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/cuestionario1" element = {<Cuestionario1/>}/>
        <Route path="/cuestionario2" element = {<Cuestionario2/>}/>
        <Route path="/cuestionario3" element = {<Cuestionario3/>}/>
        <Route path="/cuestionario4" element = {<Cuestionario4/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </>
  )
}


export default App
