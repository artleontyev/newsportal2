import {useState} from "react";
import './signIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail([e.target.value])
    }

    const handlePassChange = (e) => {
        setPass([e.target.value])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(pass)
    }
    return (
        <main>
            <div className="form__container">
                <div className="form__header">
                    <p>Welcome</p>
                </div>
                <form onSubmit={handleSubmit} id="form" noValidate>
                    <div className="input_container">
                        <label id="email_label" className="form__label" htmlFor="email">Email</label>
                        <div className="input_wrapper">
                            <input className="form__input" type="email" name="email" id="email"
                                   placeholder="Enter email" onChange={handleEmailChange}/>
                        </div>
                    </div>

                    <div className="input_container">
                        <label id="pass_label" className="form__label" htmlFor="pass">Password</label>
                        <div className="input_wrapper">
                            <input className="form__input" type="password" name="password" id="pass"
                                   placeholder="Enter password" onChange={handlePassChange}/>
                        </div>
                    </div>

                    <div className="form__button-wrapper">
                        <button id="btn" className="form__button" type="submit">LogIn</button>
                    </div>
                </form>
            </div>
        </main>

    )
}

// const mapDispatchToProps = () => {
//
// }

export default LogIn;