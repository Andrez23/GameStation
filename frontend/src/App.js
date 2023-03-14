import React from "react";
import { Routes,Route } from "react-router-dom";
import Catalogo from "./Component/Catalogo";
import Contacto from "./Component/Contacto";
import Home from "./Component/Home";
import SobreNosotros from "./Component/SobreNosotros";
import List from "./Navbar/List";
import Registrate from "./Component/Registrate"

const App=()=>{
  return( 
    <> {/*Esto funciona al igual que un div.Casi no encuentro como se ponia un comentario en react*/}
    <List/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Registrate' element={<Registrate/>}/>
      <Route path='/SobreNosotros' element={<SobreNosotros/>} />
      <Route path='/Catalogo' element={<Catalogo/>} />
      <Route path='/Contacto' element={<Contacto/>} />
    </Routes>
    </>
  )
}
export default App;

