import React from "react";
import { Routes,Route } from "react-router-dom";
import Catalogo from "./Component/Catalogo";
import Contacto from "./Component/Contacto";
import Home from "./Component/Home";
import SobreNosotros from "./Component/SobreNosotros";
import List from "./Navbar/List";
import Categoria1 from "./Navbar/CatalogoA/Categoria1";
import Categoria2 from "./Navbar/CatalogoA/Categoria2";
import Categoria3 from "./Navbar/CatalogoA/Categoria3";
import Categoria4 from "./Navbar/CatalogoA/Categoria4";

const App=()=>{
  return( 
    <> {/*Esto funciona al igual que un div.Casi no encuentro como se ponia un comentario en react*/}
    <List/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/SobreNosotros' element={<SobreNosotros/>} />
      <Route path='/Catalogo' element={<Catalogo/>} />
      <Route path='/Contacto' element={<Contacto/>} />
      <Route path='/categoria1' element={<Categoria1/>}/>
      <Route path='/categoria2' element={<Categoria2/>}/>
      <Route path='/categoria3' element={<Categoria3/>}/>
      <Route path='/categoria4' element={<Categoria4/>}/>
    </Routes>
    </>
  )
}
export default App;

