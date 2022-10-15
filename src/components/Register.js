import React from 'react';
import {NavLink} from "react-router-dom";

// const [data, setData] = useState({
//     login__email: '',
//     login__password: ''
// })
// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setData((oldData) => ({
//         ...oldData,
//         [name]:value
//     }))
// }
// const handleSubmit = (e) => {
//     e.preventDefault()
//     props.handelLogin(data.login__email, data.login__password);
// }

function Register(props) {
    return(
        <>
            <form className="register">
                <NavLink className="register__logo" to="/"></NavLink>
                <h2 className="register__title">Добро пожаловать!</h2>
                <label className="input-container register__label" onChange="#">
                    <p className="register__textLabel">Имя</p>
                    <input
                    className="register__name register__input"
                    id="register__name"
                    name="register__name"
                    type="text"
                    required
                    />
                </label>
                <label className="input-container register__label" onChange="#">
                    <p className="register__textLabel">E-mail</p>
                    <input
                    className="register__email register__input"
                    id="register__email"
                    name="register__email"
                    type="email"
                    required
                    />
                </label>
                <label className="input-container register__password" onChange="#">
                    <p className="register__textLabel">Пароль</p>
                    <input
                    className="register__password register__input"
                    id="register__password"
                    name="register__password"
                    type="password"
                    required
                    />
                </label>
                <span className="error-text" id="popup-name-error">Что-то пошло не так...</span>
                <button className="register__button" type="submit">Зарегистрироваться</button>
                <div className='register__toback'>
                    <p className="register__question">Уже зарегистрированы?</p>
                    <NavLink className="register__toChangePage" to="/sign-in">Войти</NavLink>
                </div>
                
            </form>
        </>
    )
}

export default Register;