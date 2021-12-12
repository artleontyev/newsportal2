import React from "react";
import './footer.css';
import icon from './telegram.png';



const  Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text"> © КубИТ Технологии, 2021</p>
            <a href={'https://t.me/qub_it'} target={'_blank'} rel={'nofollow noopener noreferrer'} className="footer__link">
                <img src={icon} width="20" height="20"/>
            </a>
        </div>
    )
}

export  default Footer;