import React from "react"
import { Link } from "react-router-dom"
import "./Button.css"

export function Button() {
    return(
        <Link to="Registrate">
        <button className="btn">Registrate</button>
        </Link>
    );
}

