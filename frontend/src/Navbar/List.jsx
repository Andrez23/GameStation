import React, {useState} from 'react'
import {Button} from "./Button"
import { Link } from "react-router-dom";
import "./List.css";
import Dropdown from "./Dropdown"

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    return (
      <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GameStation
            <i class='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' 
                        onClick={closeMobileMenu}>Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/Catalogo' className='nav-links' 
                        onClick={closeMobileMenu}> Catalogo <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/Contacto' className='nav-links'
                        onClick={closeMobileMenu}>Contacto
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/SobreNosotros' className='nav-links'
                        onClick={closeMobileMenu}>CRUD
                    </Link>
                </li>
                <li>
                    <Link to='/Registrate' className='nav-links-mobile'
                        onClick={closeMobileMenu}>Registrate
                    </Link>
                </li>
            </ul>
          <Button />
        </nav>
      </>
    );
  }
  
  export default Navbar;




