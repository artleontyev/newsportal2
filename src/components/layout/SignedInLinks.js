import React from "react";
import {NavLink} from "react-router-dom";
import './nav.css'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/addNews'>Add News</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating'>RV</NavLink></li>
        </ul>
    )
}

export default SignedInLinks