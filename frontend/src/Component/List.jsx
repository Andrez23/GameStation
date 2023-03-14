import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "../Css/ListStyle.css";


const List = () => {

    const [isMobile,setIsmobile ] = useState(false);

  return (
    <nav className="navbar">
        <h3 className="Logo">GameStation</h3>
        <ul className={isMobile ? "nav-links-mobile":"nav-links"}
        onClick={() => setIsmobile(false)}>
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/Catalogo" className='Catalogo'>
                <li>Catalogo</li>
            </Link>
            <Link to="/Contacto" className='Contacto'>
                <li>Contacto</li>
            </Link>
            <Link to="/SobreNosotros" className='SobreNosotros'>
                <li>SobreNosotros</li>
            </Link>
            <Link to="/Registrate" className='Registrate'>
                <li>Registrate</li>
            </Link>
        </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsmobile(!isMobile)}>
                {isMobile ? ( 
                <i className="fas fa-times"></i>
                ) : ( 
                <i className="fas fa-bars"></i>)}
            </button>
        
    </nav>
  )
}

export default List
