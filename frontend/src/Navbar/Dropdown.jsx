import React, {useState} from 'react'
import {MenuItem} from "./MenuItem"
import { Link } from "react-router-dom";
import "../Navbar/Dropdown.css"

function Dropdown() {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
            <ul onClick={handleClick}
            className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {MenuItem.map((item,index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.tittle}
                            </Link>
                        </li>
                    )
                })}                
            </ul>
        </>
    );
}


export default Dropdown;