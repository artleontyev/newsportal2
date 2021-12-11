import React from "react";
import {NavLink} from "react-router-dom";
import './nav.css'

const SignedOutLinks = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/logIn'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks