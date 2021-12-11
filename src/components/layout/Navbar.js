import React from 'react';
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import ExchangeRate from "../exchangeRates/ExchangeRate";
import Weather from "../weather/Weather";
import './nav.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <Link to='/' className='brand-logo'>Crypto News</Link>

                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar