import React from "react";
import {Link} from "react-router-dom";
import './error.css';

const Error = () => {
    return (
        <div className='error'>
            <h2 className='error__number'>404</h2>
            <p className="error__text">Что-то пошло не так </p>
            <Link to={'/'} className={'button__error button'}>
                На главную
            </Link>
        </div>
    )
}

export default Error;